import { Table } from "flowbite-react";
import { useEffect , useReducer } from "react";
import { Link } from "react-router-dom";

type Book = {
  _id: string;
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
};
// Define actions for the reducer
const SET_BOOKS = "SET_BOOKS";

// Reducer function
const booksReducer = (state : any, action : any) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};
const ManageBook = () => {
  const [allBooks, dispatch] = useReducer(booksReducer, []);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => dispatch({ type: SET_BOOKS , payload: data }))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Handle Delete Book
  const handleDelete = (_id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this book?");
    if (!confirmed) {
      return; // Do nothing if the user cancels the deletion
    }
  
    // Optimistically update the state
    dispatch({ type: SET_BOOKS, payload: allBooks.filter((book : Book) => book._id !== _id) });
  
    fetch(`http://localhost:3000/delete-book/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book</h2>
      <Table className="lg:w-[1124px]">
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name </Table.HeadCell>
          <Table.HeadCell>Book Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit Or Manage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((book: Book, index : any) => (
            <Table.Row
              key={book._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10</Table.Cell>

              <Table.Cell className="flex items-center justify-around">
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBook;
