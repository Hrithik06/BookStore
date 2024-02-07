import { useState } from "react";
import { Label, Select, TextInput , Textarea, Button } from "flowbite-react";
import { useParams, useLoaderData } from "react-router-dom";

const EditBook = () => {
  const bookCategories = [
    "Fantasy",
    "Dystopian",
    "Classic",
    "Thriller",
    "Mystery",
    "Post-apocalyptic",
    "Science Fiction",
    "Romance",
    "Historical Fiction",
    "Horror",
    "Adventure",
    "Young Adult",
    "Crime",
    "Biography",
    "Self-help",
    "Memoir",
    "Humor",
    "Poetry",
    "Graphic Novel",
    "Western",
    "Children's",
    "Cookbook",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
const {id} = useParams();
const data = useLoaderData()
const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = data
  
  const handleSelectedBookCategoryChange = (e) => {
    console.log(e.target.value);

    setSelectedBookCategory(e.target.value);
  };
const handleUpdate = (event) => {
event.preventDefault();
const form = event.target;
const bookTitle = form.bookTitle.value;
const authorName = form.authorName.value;
const imageUrl = form.imageUrl.value;
const category = selectedBookCategory;
const bookDescription = form.bookDescription.value;
const bookPdbookObjfUrl = form.bookPdfUrl.value;

const updateBookObj = {
  bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
}

fetch(`http://localhost:5000/book/${id}`, {
  method:"PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateBookObj),
}).then(respone=>respone.json()).then(data=>data.acknowledged && alert("Book Has been Updated")
)




}
  return (
    <div className="px-4 my-8 w-full">
      <h2 className="text-3xl p-2 font-semibold border-b-2">Update Book Data</h2>
      <form className=" m-2 p-2 " onSubmit={handleUpdate}>

        <h3 className="text-xl font-bold text-gray-500">ID of this Book: {id}</h3>
        {/* bookname */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="bookTitle" value="Book Title" />
          <TextInput
            className="w-full mr-10 rounded-lg"
            type="text"
            name="bookTitle"
            id="bookTitle"
            defaultValue = {bookTitle}          />
        </div>
        {/* author name */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="authorName" value="Author Name" />
          <TextInput
            className="w-full mr-10 rounded-lg"
            type="text"
            name="authorName"
            id="authorName"
            defaultValue = {authorName}
          />
        </div>
        {/* image URl */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="imageUrl" value="Image URL" />
          <TextInput
            className="w-full mr-10 rounded-lg"
            type="text"
            name="imageUrl"
            id="imageUrl"
            defaultValue = {imageUrl}         />
        </div>
        {/* category */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="category" value="Category" />

          <Select id="category" className="w-full" required onChange={handleSelectedBookCategoryChange} defaultValue = {category}>

            {
              bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))
            }
            
          </Select>
        </div>
        {/* Description */}
        <div className="flex items-center gap-2 m-2">
          <Label
            className="w-2/12"
            htmlFor="bookDescription"
            value="Book Description"
          />
          <Textarea 
          rows={4}

            className="w-full mr-10 rounded-lg"
            type="text"
            name="bookDescription"
            id="bookDescription"
            defaultValue = {bookDescription}
          />
        </div>
        {/* pdf url  */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="bookPdfUrl" value="Book PDF URL" />
          <TextInput
            className="w-full mr-10 rounded-lg"
            type="text"
            name="bookPdfUrl"
            id="bookPdfUrl"
            defaultValue = {bookPdfUrl}
          />
        </div>
        <div className="flex gap-5 m-5">
        <Button type="submit" className="w-1/3">Update</Button>
        {/* <Button  color="failure" className="w-1/3">Clear</Button> */}
        </div>
      </form>
    </div>
  );
};

export default EditBook;
