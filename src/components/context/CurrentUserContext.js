import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../../api';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  //   let navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);

  //   const checkLogin = () => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       api.get('/user/profile/email').then((res) => {
  //         const { user } = res.data;
  //         console.log(res.data);
  //         setAuthLoading(false);
  //         if (user) {
  //           setCurrentUser(user);
  //           return <Navigate to="/kpi" />;
  //         }
  //       });
  //       //   setAuthLoading(false);
  //       //   setCurrentUser(localStorage.getItem('firstName'));
  //     } else {
  //       setAuthLoading(false);
  //       setCurrentUser(null);
  //     }
  //   };

  const checkLogin = () => {
    const token = localStorage.getItem('token');
    let admin = localStorage.getItem('isAdmin');
    // setAuthLoading(true);

    if (token && admin) {
      setAuthLoading(false);
      return <Navigate to="/kpi" />;
    } else if (token && !admin) {
      setAuthLoading(false);
      setCurrentUser(null);
      return <Navigate to="/dashboard" />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token', 'firstName');
    setCurrentUser(null);
  };

  const Protect = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  };

  const testData = 'test data';

  const stateValues = {
    currentUser,
    setCurrentUser,
    checkLogin,
    setAuthLoading,
    authLoading,
    handleLogout,
    testData,
    Protect,
  };

  return (
    <CurrentUserContext.Provider value={stateValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};
