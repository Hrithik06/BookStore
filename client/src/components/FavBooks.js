import { useEffect, useState } from "react";
import BookCards from "./BookCards";

const FavBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getFavBooks();
  }, []);

  const getFavBooks = async () => {
    const data = await fetch("http://localhost:5000/all-books");
    const json = await data.json();
    setBooks(json);
  };

  return <div className="m-5">
    <BookCards books={books} headline={"Best Sellers"} />
  </div>;
};

export default FavBooks;
