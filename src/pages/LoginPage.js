import React from 'react';
import bgimage from '../img/domefinal.png';
import icon from '../img/logoMuj.png';
import { useState, useEffect } from 'react';
import { Avatar, Pane, toaster } from 'evergreen-ui';
import { useContext } from 'react';
import { CurrentUserContext } from '../components/context/CurrentUserContext';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  let navigate = useNavigate();
  const { setCurrentUser, setAuthLoading, authLoading } =
    useContext(CurrentUserContext);
  //Taking initial values for the input fields
  const initialValues = { email: '', password: '' };
  //UseState for the form values
  const [formValues, setFormValues] = useState(initialValues);
  //errors for validating the form values
  const [formErrors, setFormErrors] = useState({});
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  // Set Loading
  const [isLoading, setIsLoading] = useState(false);
  //UseEffect to enable to submit the form when it all validation is cleared
  useEffect(() => {
    console.log();
  }, []);
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  //handleChange for looking for the changes when someone types something in the input fields
  const handleChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //Submitting the form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setAuthLoading(true);
    setIsLoading(true);
    try {
      const res = await api.post('/auth/login', formValues);
      console.log(res.data);
      const { id, firstName, lastName, isAdmin } = res.data;
      if (isAdmin === true) {
        localStorage.setItem('token', id);
        localStorage.setItem('isAdmin', isAdmin);
        localStorage.setItem('currentUser', firstName);
        navigate('/verify-kpi');
      } else if (isAdmin === false) {
        localStorage.setItem('token', id);
        localStorage.setItem('currentUser', firstName + ' ' + lastName);
        navigate('/dashboard');
      }
    } catch (error) {
      toaster.warning('Login Failed', {
        id: 'forbidden-action',
      });
    } finally {
      setAuthLoading(false);
      setIsLoading(false);
    }
  };
  //Validation for the form
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = '*email is required';
    }
    if (!values.password) {
      errors.password = '*Password is required';
    } else if (values.password.length < 4) {
      errors.password = '*Minimum 4 characters required';
    }
    return errors;
  };

  return (
    <div
      className="container font-monts"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className=" pt-48 h-screen">
        <form
          className=" grid justify-items-center w-1/3 mx-auto min-h-[25rem] shadow-3xl rounded-lg glass text-white"
          onSubmit={handleSubmit}
        >
          <div className="grid justify-items-center content-start pt-10">
            <img src={icon} className=" h-20" />
            <h3 className=" font-inter font-bold text-4xl mb-8 ">QAC Portal</h3>
            {/* <span className="text-sm text-gray-700 py-2">
              Enter your credentials to access your account
            </span> */}
          </div>
          <div className="grid content-start -mt-4">
            <div className="grid grid-rows-1">
              <div className="mb-4 grid grid-rows-1">
                <label type="email" className=" font-light mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  // placeholder="Enter your email"
                  className=" outline-none rounded-md glass pl-2 py-1"
                ></input>
                <span className="text-red-500">{formErrors.email}</span>
              </div>
              <div className="grid grid-rows-1">
                <label type="email" className="font-light mb-2 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  // placeholder="Enter your password"
                  className="outline-none rounded-md glass pl-2 py-1"
                ></input>
                <span className="text-red-500">{formErrors.password}</span>
              </div>
            </div>
            {isLoading ? (
              <button className="flex place-content-center font-inter login_button text-white font-medium py-2 px-4 mt-8 mb-12 ">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Login
              </button>
            ) : (
              <button className=" font-inter login_button text-white font-medium py-2 px-4 mt-8 mb-12">
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
