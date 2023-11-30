import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"

type Book = {
  _id: string;
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
};

type BookFormData = {
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
};

const EditBook = () => {
  const { id } = useParams() ; 
  const { bookTitle , authorName, imageURL, category , bookDescription, bookPDFURL } = useLoaderData() as Book 
  

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiographic",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, SetSelectedBookCatogory] = useState(
    category 
  );

  const handleChangeSelectedValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    SetSelectedBookCatogory(event.target.value);
  };
  // Handle Book Submit
  const handleBookSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData: BookFormData = {
      bookTitle:
        (form.querySelector('[name="bookTitle"]') as HTMLInputElement)?.value ||
        bookTitle,
      authorName:
        (form.querySelector('[name="authorName"]') as HTMLInputElement)
          ?.value || authorName,
      imageURL:
        (form.querySelector('[name="imageURL"]') as HTMLInputElement)?.value ||
        imageURL,
      category: (selectedBookCategory || category), 
      bookDescription:
        (form.querySelector('[name="bookDescription"]') as HTMLTextAreaElement)
          ?.value || bookDescription,
      bookPDFURL:
        (form.querySelector('[name="bookPDFURL"]') as HTMLInputElement)
          ?.value || bookPDFURL,
    };

    // Now you can use formData to submit or process the data
    console.log(formData);

    // Update data to db
    fetch(`http://localhost:3000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Update Failed");
    });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update a book</h2>

      <form
        className="flex lg:w-[1124px] flex-col flex-wrap gap-4"
        onSubmit={handleBookSubmit}
      >
        {/* First Row */}
        <div className="flex gap-8">
          {/* Book Tittle */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder={bookTitle}
              required
              defaultValue={bookTitle}
            />
          </div>

          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder={authorName}
              required
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="Image URL"
              required
              defaultValue={imageURL}
            />
          </div>

          {/* Catagory */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputstate" value="Book Category" />
            </div>
            <Select
              id="inputstate"
              name="categoryName "
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </Select>
          </div>
        </div>
        <div className="lg:w-[1124px]">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Write your book description..."
            required
            className="w-full"
            rows={5}
            name="bookDescription"
            defaultValue={bookDescription}
          />
        </div>

        {/* Book pdn links */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            name="bookPDFURL"
            required
            shadow
            defaultValue={bookPDFURL}
          />
        </div>

        {/* Submit Button */}

        <Button type="submit">Update</Button>
      </form>
    </div>
  );
}

export default EditBook