import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contects/AuthProvider";
import { useContext, useState } from "react";
import googleLogo from '../../assets/google-logo.svg'
import { GoogleAuthProvider } from "firebase/auth/cordova";
const SignUp  = () => {
  const { loginWithGoogle } = useContext(AuthContext) as any ; 
  const { createUser } = useContext(AuthContext) as any ;
  const [error, setError] = useState<string | null>(null);
  const location = useLocation() ; 
  const navigate = useNavigate() ; 
  const from = location.state?.from?.pathname ||  "/" ; 

  // Signup Using Email and Password ; 
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value;
    const password = (form.querySelector('[name="password"]') as HTMLInputElement)?.value;
    try {
      const userCredential = await createUser(email, password);
      alert("Sign in successfully") ; 
      const user = await userCredential.user;
      // Do something with the user if needed
      navigate(from, {replace : true})
    } catch (error : any) {
      const errorMessage = error.message ; 
      setError(errorMessage);
      alert(error.code) ;  
    }
  };

  // Signup Using Google 
  const handleRegister = () => {
    loginWithGoogle()
    .then((result: any) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error : any) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage)
    });
  }


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSignUp}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className=" h-10 w-full border-b-2 border-gray-300 text-gray-900"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                </div>
                <p>
                  If you have any account. Please{" "}
                  <Link to="/login" className="text-blue-700 underline">
                    Login
                  </Link>{" "}
                  Here
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-4 py-1">
                    Sign up
                  </button>
                </div>
              </form>

            </div>

            <hr/>
            <div className="flex  w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister}>
                <img src={googleLogo} alt="google-logo" className="w-12 h-12 inline-block"></img>
                Login with Google   
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
