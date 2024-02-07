import { useState } from "react";
import { Label, Select, TextInput , Textarea, Button } from "flowbite-react";

const UploadBook = () => {
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

  const handleSelectedBookCategoryChange = (e) => {
    setSelectedBookCategory(e.target.value);
  };


const handleBookSubmit = (event) => {
event.preventDefault();
const form = event.target;
const bookTitle = form.bookTitle.value;
const authorName = form.authorName.value;
const imageUrl = form.imageUrl.value;
const category = selectedBookCategory;
const bookDescription = form.bookDescription.value;
const bookPdfUrl = form.bookPdfUrl.value;

const addBookObj = {
  bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
}
// Sending data to DB

fetch("http://localhost:5000/upload-book", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(addBookObj),
}).then(res=>res.json()).then(data=>{
  console.log(data)
  
  alert("Book Uploaded with ID: "+data.insertedId);
})
form.reset();

}



  return (
    <div className="px-4 my-10 w-full">
      <h2 className="text-3xl font-semibold">Upload a Book</h2>
      <form className="" onSubmit={handleBookSubmit}>
        {/* bookname */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="bookTitle" value="Book Title" />
          <TextInput
            className="w-full mr-10 rounded-lg"
            type="text"
            name="bookTitle"
            id="bookTitle"
            placeholder="Book Title"
          />
        </div>
        {/* author name */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="authorName" value="Author Name" />
          <TextInput
            className="w-full mr-10 rounded-lg"
            type="text"
            name="authorName"
            id="authorName"
            placeholder="Author Name"
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
            placeholder="Image URL"
          />
        </div>
        {/* category */}
        <div className="flex items-center gap-2 m-2">
          <Label className="w-2/12" htmlFor="category" value="Category" />

          <Select id="category" className="w-full" required onChange={handleSelectedBookCategoryChange}>

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
            placeholder="Book Description"
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
            placeholder="Book PDF URL"
          />
        </div>
        <div className="flex justify-center">
        <Button type="submit" className="w-1/3">Upload Book</Button>

        </div>
      </form>
    </div>
  );
};

export default UploadBook;
