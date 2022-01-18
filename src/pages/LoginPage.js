import React from 'react';
import bgimage from '../img/domefinal.png';
import icon from '../img/cllglogo.jpg';
import axios from '../axios';
import { useState, useEffect } from 'react';
import { Avatar } from 'evergreen-ui';
function LoginPage() {
  //Taking initial values for the input fields
  const initialValues = { email: '', password: '' };
  //UseState for the form values
  const [formValues, setFormValues] = useState(initialValues);
  //errors for validating the form values
  const [formErrors, setFormErrors] = useState({});
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  //UseEffect to enable to submit the form when it all validation is cleared

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      const res = await axios.post('/auth/login', formValues);
      console.log(res.data);
    } catch (error) {}
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
      className="container"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className=" pt-48 h-screen">
        <form
          className=" grid justify-items-center w-1/3 mx-auto min-h-[25rem] shadow-2xl rounded-lg glass text-white"
          onSubmit={handleSubmit}
        >
          <div className="grid justify-items-center content-start pt-10">
            <img src={icon} className=" h-28" />
            <h3 className="font-sans font-semibold text-xl mb-4 ">
              Welcome Back
            </h3>
            {/* <span className="text-sm text-gray-700 py-2">
              Enter your credentials to access your account
            </span> */}
          </div>
          <div className="grid content-start -mt-4">
            <div className="grid grid-rows-1">
              <div className="mb-4 grid grid-rows-1">
                <label type="email" className="font-thin mb-2">
                  email
                </label>
                <input
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  // placeholder="Enter your email"
                  className="border-2 rounded-md focus:shadow-outline pl-2 text-gray-900"
                ></input>
                <span className="text-red-500">{formErrors.email}</span>
              </div>
              <div className="grid grid-rows-1">
                <label type="email" className="font-thin mb-2 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  // placeholder="Enter your password"
                  className="border-2 rounded-md focus:shadow-outline pl-2 text-gray-900"
                ></input>
                <span className="text-red-500">{formErrors.password}</span>
              </div>
            </div>
            <button className="bg-black hover:shadow-2xl text-white font-medium py-2 px-4 rounded mt-8 transition ease-in-out delay-150 mb-6">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
