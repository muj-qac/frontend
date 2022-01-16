import { Button, Dialog, FilePicker, Pane, TextInput } from "evergreen-ui";
import { useState, useEffect } from "react";
import React from "react";
import { EditIcon } from "evergreen-ui";
import KPIRow2 from "../KPIRow2";
import axios from "axios";
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
    department: user.department,
    faculty: user.faculty,
    school: user.school,
    program: user.program,
  };
  //UseState for the form values
  const [modalValues, setModalValues] = useState(initialValues);
  //errors for validating the form values
  const [modalErrors, setModalErrors] = useState({});
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  //UseEffect to enable to submit the form when it all validation is cleared
  // // useEffect(() => {
  // //   // console.log(modalErrors);
  // //   if (isSubmit) {

  // //   }
  // }, [modalErrors]);
  //handleChange for looking for the changes when someone types something in the input fields
  //Validation for the modal
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.username = "*Username is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "*Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "*Minimum 4 characters required";
  //   }
  //   return errors;
  // };
  const handleChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setModalValues({ ...modalValues, [name]: value });
  };
  //Submitting the form
  const handleSubmit = (e) => {
    // setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(JSON.stringify(modalValues));
    // const dataToSend = JSON.stringify(modalValues);
    // axios.post(url, dataToSend).then((res) => {
    //   console.log(res.data);
    // });
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
          <div>
            <h3>First Name</h3>
            <TextInput
              name="name"
              placeholder="Enter the name"
              value={modalValues.firstname}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Last Name</h3>
            <TextInput
              name="name"
              placeholder="Enter the name"
              value={modalValues.lastname}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="">Email</h3>
            <TextInput
              name="email"
              value={modalValues.email}
              placeholder="Enter email"
              marginBottom={8}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="">Phone</h3>
            <TextInput
              name="phone"
              value={modalValues.phone}
              placeholder="Enter phone"
              marginBottom={8}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Role</h3>
            <TextInput
              name="role"
              placeholder="Enter roles"
              value={modalValues.role}
              marginBottom={11}
              onChange={handleChange}
            />
          </div>
        </div>

        <br />
        <hr />
        <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
        <div className="grid grid-cols-2">
          <div>
            <h3>Department</h3>
            <TextInput
              name="department"
              value={modalValues.department}
              placeholder="i.e. Department of Computer Science and Engineering"
              marginBottom={11}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Faculty</h3>
            <TextInput
              name="faculty"
              value={modalValues.faculty}
              placeholder="i.e. Professor"
              marginBottom={11}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>School</h3>
            <TextInput
              name="school"
              value={modalValues.school}
              placeholder="i.e. School of Computing and Information Technology
              "
              marginBottom={11}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Program</h3>
            <TextInput
              name="program"
              value={modalValues.program}
              placeholder="i.e. MTech - Information Security "
              marginBottom={11}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <Button onSubmit={handleSubmit}>Save</Button> */}
      </Dialog>
    </Pane>
  );
}

export default UserModal;
