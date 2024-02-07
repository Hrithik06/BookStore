import Card from "./Card";
const BookCards = ({ books, headline }) => {
  // console.log(books)

  return (
    <div>
      <h2 className="text-3xl text-center font-bold  ">{headline}</h2>

      <div className="p-5">
        <div className="flex">
          {books.map((book) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCards;
