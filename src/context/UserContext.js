// import React, { createContext } from "react";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const userContext = createContext(null);
// const userContext = createContext();

// export function useAuth() {
//   return useContext(userContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//   };

//   return <userContext.Provider value={value}>{children}</userContext.Provider>;
// }
