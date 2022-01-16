import React from "react";
import bgimage from "../img/LoginBg.jpg";
import icon from "../img/cllglogo.jpg";
import { useState, useEffect } from "react";
import { Avatar } from "evergreen-ui";
function LoginPage() {
  //Taking initial values for the input fields
  const initialValues = { username: "", password: "" };
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  //Validation for the form
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "*Username is required";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 4) {
      errors.password = "*Minimum 4 characters required";
    }
    return errors;
  };
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-60 h-screen">
        <form
          className="grid justify-items-center  w-1/3 mx-auto h-3/4 shadow-2xl  bg-white"
          onSubmit={handleSubmit}
        >
          <div className="grid justify-items-center content-start pt-10">
            <Avatar src={icon} size={70} />
            <h3 className="font-sans font-semibold text-xl">Welcome Back</h3>
            <span className="text-sm text-gray-700">
              Enter your credentials to access your account
            </span>
          </div>
          <div className="grid content-start -mt-4">
            <div className="grid grid-rows-1">
              <div className="mb-4 grid grid-rows-1">
                <label type="email" className="font-thin mb-2">
                  Username
                </label>
                <input
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                  // placeholder="Enter your username"
                  className="border-2 rounded-md focus:shadow-outline pl-2"
                ></input>
                <span className="text-red-500">{formErrors.username}</span>
              </div>
              <div className="grid grid-rows-1">
                <label type="email" className="font-thin mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  // placeholder="Enter your password"
                  className="border-2 rounded-md focus:shadow-outline pl-2"
                ></input>
                <span className="text-red-500">{formErrors.password}</span>
              </div>
            </div>
            <button className="bg-black hover:shadow-2xl text-white font-medium py-2 px-4 rounded mt-8 transition ease-in-out delay-150">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
