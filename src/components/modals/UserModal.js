import { Button, Dialog, FilePicker, Pane, TextInput } from "evergreen-ui";
import { useState, useEffect } from "react";
import React from "react";
import { SelectMenu } from "evergreen-ui";
import { EditIcon } from "evergreen-ui";
import KPIRow2 from "../KPIRow2";
import axios from "axios";
import { Pill, Text } from "evergreen-ui";
function UserModal({ setModalOpen, modalOpen, title, user }) {
  const url = "";
  const [loading, setLoading] = useState(false);
  //Taking initial values for the input fields
  const initialValues = {
    index: user.index,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    role: user.role,
    pass: user.pass,
    cnfrmpass: user.cnfrmpass,
    department: user.department,
    faculty: user.faculty,
    school: user.school,
    program: user.program,
  };

  //UseState for the form values
  const [modalValues, setModalValues] = useState(initialValues);
  //errors for validating the form values
  const [modalErrors, setModalErrors] = useState({});
  // //for roles to be displayed in modals
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  //UseEffect to enable to submit the form when it all validation is cleared
  useEffect(() => {
    console.log(modalErrors);
    if (Object.keys(modalErrors).length === 0 && isSubmit) {
      console.log(modalValues);
    }
  }, [modalErrors]);
  //handleChange for looking for the changes when someone types something in the input fields
  // Validation for the modal
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "*Firstname is required";
    }
    if (!values.email) {
      errors.email = "*Required";
    }
    if (values.cnfrmpass !== values.pass) {
      errors.cnfrmpass = "*Password doesn't match..";
    }
    if (!values.pass || !values.cnfrmpass) {
      errors.pass = "*Password can't be empty";
    }
    if (!values.department) {
      errors.department = "*Required";
    }
    if (!values.faculty) {
      errors.faculty = "*Required";
    }
    if (!values.school) {
      errors.school = "*Required";
    }
    if (!values.program) {
      errors.program = "*Required";
    }
    return errors;
  };
  const handleChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setModalValues({ ...modalValues, [name]: value });
  };
  //Submitting the form
  const handleSubmit = (e) => {
    setModalErrors(validate(modalValues));
    setIsSubmit(true);
    // console.log(JSON.stringify(modalValues));
  };
  return (
    <Pane>
      <Dialog
        isShown={modalOpen}
        onCloseComplete={() => setModalOpen(false)}
        preventBodyScrolling
        hasCancel={false}
        confirmLabel="Save"
        width={800}
        onConfirm={handleSubmit}
      >
        <h1 className="text-xl font-semibold pb-8">{title}</h1>
        <h3 className="mb-6 font-semibold">Unique ID: {modalValues.index}</h3>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1">
            <h3>First Name</h3>
            <TextInput
              name="firstname"
              placeholder="Enter the name"
              value={modalValues.firstname}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.firstname}</span>
          </div>
          <div>
            <h3>Last Name</h3>
            <TextInput
              name="lastname"
              placeholder="Enter the name"
              value={modalValues.lastname}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1">
            <h3 className="">Email</h3>
            <TextInput
              name="email"
              value={modalValues.email}
              placeholder="Enter email"
              marginBottom={8}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.email}</span>
          </div>
          <div className="grid grid-cols-1 mt-2">
            <h3 className="">Phone</h3>
            <TextInput
              name="phone"
              value={modalValues.phone}
              placeholder="Enter phone"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1">
            <h3>Role</h3>
            <TextInput
              name="role"
              value={modalValues.role}
              placeholder="Enter role"
              marginBottom={8}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <h3>Password</h3>
          <TextInput
            name="pass"
            type="password"
            placeholder="Enter the password"
            value={modalValues.pass}
            marginBottom={8}
            marginRight={10}
            onChange={handleChange}
          />
          <span className="text-red-500">{modalErrors.pass}</span>
        </div>
        <div className="grid grid-cols-1">
          <h3>Confirm Password</h3>
          <TextInput
            name="cnfrmpass"
            type="password"
            placeholder="ReEnter password"
            value={modalValues.cnfrmpass}
            marginBottom={8}
            marginRight={10}
            onChange={handleChange}
          />
          <span className="text-red-500">{modalErrors.cnfrmpass}</span>
        </div>
        <br />
        <hr />
        <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1">
            <h3>Department</h3>
            <TextInput
              name="department"
              value={modalValues.department}
              placeholder="i.e. Department of Computer Science and Engineering"
              marginBottom={11}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.department}</span>
          </div>
          <div className="grid grid-cols-1">
            <h3>Faculty</h3>
            <TextInput
              name="faculty"
              value={modalValues.faculty}
              placeholder="i.e. Professor"
              marginBottom={11}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.faculty}</span>
          </div>
          <div className="grid grid-cols-1">
            <h3>School</h3>
            <TextInput
              name="school"
              value={modalValues.school}
              placeholder="i.e. School of Computing and Information Technology
              "
              marginBottom={11}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.school}</span>
          </div>
          <div className="grid grid-cols-1">
            <h3>Program</h3>
            <TextInput
              name="program"
              value={modalValues.program}
              placeholder="i.e. MTech - Information Security "
              marginBottom={11}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.program}</span>
          </div>
        </div>
        {/* <Button onSubmit={handleSubmit}>Save</Button> */}
      </Dialog>
    </Pane>
  );
}

export default UserModal;
