import React from 'react';
import { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password, isadmin) {
    // return auth.signInWithEmailAndPassword(email, password);
  }

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       setCurrentUser(user);
  //       setLoading(false);
  //     });
  //     return unsubscribe;
  //   }, [auth]);

  const value = {
    currentUser,
    login,
  };
  console.log(children);
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
