import { Table, Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);
  const getAllBooks = async () => {
    const data = await fetch("http://localhost:5000/all-books");
    const json = await data.json();
    setAllBooks(json);
  };

  const handleDeleteBook = async (id) => {
    alert("Are you sure you want to delete?")
    try {
      // Delete the book
      const response = await fetch(`http://localhost:5000/book/${id}`, {
        method: "DELETE",
      });
      // Check if deletion was successful
      if (response.ok) {
        // Fetch updated list of books
        await getAllBooks();
        alert(`Book with ID ${id} deleted successfully.`);
      } else {
        alert("Failed to delete the book.");
      }
    } catch (error) {
      alert("An error occurred while deleting the book:", error);
    }
  };
  

  return (
    <div className="px-4 my-10 w-full">
      <h2 className="text-3xl font-semibold mb-3">Manage Books</h2>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head >
            <Table.HeadCell className="w-10">Sl No.</Table.HeadCell>

            <Table.HeadCell className="w-96">Book Title</Table.HeadCell>
            <Table.HeadCell className="w-48">Author</Table.HeadCell>
            <Table.HeadCell className="w-36">Category</Table.HeadCell>
            <Table.HeadCell className="w-16">Book ID</Table.HeadCell>
            <Table.HeadCell className="text-center">Manage</Table.HeadCell>
            
          </Table.Head>
          <Table.Body className="divide-y">
            {allBooks &&
              allBooks.map((book, index) => {
                return (
                  <Table.Row key={book._id}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell className="font-medium text-gray-900 dark:text-white">
                      {book.bookTitle}
                    </Table.Cell>
                    <Table.Cell>{book.authorName}</Table.Cell>

                    <Table.Cell>{book.category}</Table.Cell>
                    <Table.Cell>{book._id}</Table.Cell>

                    <Table.Cell className="flex gap-2   justify-between items-center">
                      <Link
                        to={`/admin/dashboard/edit-book/${book._id}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mx-4"
                      >
                        Edit
                      </Link>
                      <Button color="failure" onClick={()=>handleDeleteBook(book._id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
