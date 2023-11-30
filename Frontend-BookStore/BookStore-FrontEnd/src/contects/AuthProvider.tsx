// AuthProvider.tsx
import { createContext, useState, ReactNode, useEffect } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, UserCredential, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<{
  createUser: (email: string, password: string) => Promise<UserCredential>;
} | null>(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Dealing with Email and Password 
  const createUser = async (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false); 
    });
    return () => {
      return unsubscribe(); 
    }
  }, [])

  // Dealing with google authentication 
  const loginWithGoogle = () => {
    setLoading(true) ;
    return signInWithPopup(auth, googleProvider) 
  }

  // Dealing with login with email and password 
  const loginWithEmailAndPassword = async (email : any , password: any) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result ; 
  }

  // Dealing with logout 
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }



  const authInfo = {
    logOut,
    user, 
    createUser,
    loginWithGoogle,
    loading, 
    loginWithEmailAndPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
