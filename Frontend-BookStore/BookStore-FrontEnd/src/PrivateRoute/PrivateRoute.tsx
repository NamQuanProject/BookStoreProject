import { useContext } from "react"
import { AuthContext } from "../contects/AuthProvider"
import { Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children} : any)=> {
  const {user} = useContext(AuthContext) as any ;
  const {loading} = useContext(AuthContext) as any ; 
  const location = useLocation();
  console.log(loading) ; 
  console.log(user) ; 
  if(loading == true) {
    return (
    <div className="text-center">
        <Spinner aria-label="center-aligned spinner example" />
    </div>
    )
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{from : location}}/>
  )
}

export default PrivateRoute