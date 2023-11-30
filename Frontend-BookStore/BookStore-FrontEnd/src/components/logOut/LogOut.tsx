import { useContext, useState } from "react";
import { AuthContext } from "../../contects/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom";

const LogOut = () => {
  const [errors , setErrors] = useState("Error") ; 
  const { logOut } = useContext(AuthContext) as any ; 
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname;
  const handleLogOut = () => {
    logOut()
    .then(() => {
      alert("Log Out SuccessFully");
      navigate(from, {replace : true})
    }).catch((error : any)  => {
      setErrors(error.message) ;
      alert(errors);
    });
  }
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button onClick={handleLogOut} className="bg-red-700 px-8 py-2 text-white rounded">
          LogOut
      </button>
    </div>
  )
}
 
export default LogOut