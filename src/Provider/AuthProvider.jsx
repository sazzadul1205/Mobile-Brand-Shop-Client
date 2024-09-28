import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

// Create AuthContext
export const AuthContext = createContext(null);

// Initialize Google Provider
const googleProvider = new GoogleAuthProvider();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Ensure user is initialized to null
  const [loading, setLoading] = useState(true);

  // Create a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once user is set
    });
    return () => unSubscribe(); // Cleanup subscription on unmount
  }, []);

  // Provide auth info to the rest of the app
  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    signIn,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
