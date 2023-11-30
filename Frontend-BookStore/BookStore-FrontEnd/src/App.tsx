import Navbar from "./components/Navbar/Navbar";
import ContactMe from "./pages/ContactMe/ContactMe";
import Home from "./pages/Home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import SingleBook from "./components/SingleBook/SingleBook";
import MyFooter from "./components/MyFooter/MyFooter";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import DashBoardLayOut from "./dashboard/DashBoardLayOut";
import DashBoard from "./dashboard/DashBoard";
import UploadBook from "./dashboard/UploadBook";
import ManageBook from "./dashboard/ManageBook";
import EditBook from "./dashboard/EditBook";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import LogOut from "./components/logOut/LogOut";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>

        <MyFooter />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact-me",
          element: <ContactMe />,
        },
        {
          path:"/about",
          element: <About/>,
        },
        {
          path: "/book/:id",
          element: <SingleBook />,
          loader: ({ params }) =>
            fetch(`http://localhost:3000/book/${params.id}`).then((res) =>
              res.json()
            ),
        },
      ],
    },
    {
      path: "/admin/dashboard",
      element: <DashBoardLayOut/>,
      children: [
        {
          path:"/admin/dashboard",
          element: <PrivateRoute><DashBoard/></PrivateRoute>,
        },
        {
          path:"/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element: <ManageBook/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element: <EditBook/>,
          loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        }
      ]
    },
    {
      path:"/sign-up", 
      element : <SignUp/>
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path:"/logout",
      element: <LogOut/>,
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
