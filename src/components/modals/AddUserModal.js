import { Button, Dialog, FilePicker, Pane, TextInput } from 'evergreen-ui';
import { useState, useEffect } from 'react';
import React from 'react';
import { SelectMenu } from 'evergreen-ui';
import { EditIcon } from 'evergreen-ui';
import KPIRow2 from '../KPIRow2';
import axios from 'axios';
import { Pill, Text } from 'evergreen-ui';
import api from '../../api';

function AddUserModal({ setModalOpen3, modalOpen, title, user }) {
  // const profile = ['SCIT', 'Apricot', 'Banana', 'Cherry', 'Cucumber'];
  const [roles, setRoles] = useState([]);

  //!Roles do not render Get roles working do not erase this code
  useEffect(() => {
    const fetchRole = async () => {
      const res = await api.get(`/admin/role/get-roles`);
      setRoles(res.data);
      console.log(res.data);
    };
    fetchRole();
  }, []);

  // const [options] = useState(
  //   finalRoles.map((label) => ({
  //     label,
  //     value: label,
  //   }))
  // );
  const url = '';
  const [loading, setLoading] = useState(false);
  //Taking initial values for the input fields
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  };
  const initialDetailsValues = {
    details: {
      department: '',
      faculty: '',
      program: '',
      school: '',
    },
  };
  //UseState for the form values
  const [modalValues3, setModalValues3] = useState({
    ...initialValues,
    ...initialDetailsValues,
  });
  //errors for validating the form values
  const [modalErrors, setModalErrors] = useState({});
  const [selectedItemsState, setSelectedItems] = useState([]);
  const [selectedItemNamesState, setSelectedItemNames] = useState(null);
  // //for roles to be displayed in modals
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  //UseEffect to enable to submit the form when it all validation is cleared

  useEffect(() => {
    // console.log(selectedItemsState);
    setModalValues3({ ...modalValues3, role: selectedItemsState });
  }, [selectedItemsState]);

  useEffect(() => {
    if (Object.keys(modalErrors).length === 0 && isSubmit) {
      console.log(modalValues3);
      setLoading(true);
      try {
        api.post(`/admin/user/add-user`, modalValues3);
        setModalOpen3(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [modalErrors]);
  //handleChange for looking for the changes when someone types something in the input fields
  // Validation for the modal
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = '*First Name is required';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "*Password doesn't match..";
    }
    if (!values.password || !values.confirmPassword) {
      errors.password = "*Password can't be empty";
    }
    if (!values.email) {
      errors.email = '*Required';
    }
    if (!values.details.department) {
      errors.department = '*Required';
    }
    if (!values.details.faculty) {
      errors.faculty = '*Required';
    }
    if (!values.details.school) {
      errors.school = '*Required';
    }
    if (!values.details.program) {
      errors.program = '*Required';
    }
    return errors;
  };
  const handleChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setModalValues3({ ...modalValues3, [name]: value });
  };
  const handleDetailChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setModalValues3({
      ...modalValues3,
      details: { ...modalValues3.details, [name]: value },
    });
  };
  //Submitting the form

  const handleSubmit = (e) => {
    setModalErrors(validate(modalValues3));
    console.log(modalErrors);
    setIsSubmit(true);
    // try {
    //   if (!modalErrors) {
    //     api.post(`/admin/user/add-user`, modalValues3);
    //     setModalOpen3(false);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(JSON.stringify(modalValues));
  };
  return (
    <Pane>
      <Dialog
        isShown={modalOpen}
        title="New User Info"
        onCloseComplete={() => setModalOpen3(false)}
        hasClose={false}
        preventBodyScrolling
        hasCancel={true}
        confirmLabel="Save"
        width={800}
        onConfirm={handleSubmit}
        isConfirmLoading={loading}
      >
        <h1 className="text-xl font-semibold pb-8">{title}</h1>
        <h3 className="mb-6 font-semibold">Unique ID:</h3>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1">
            <h3>First Name</h3>
            <TextInput
              name="firstName"
              placeholder="Enter the name"
              value={modalValues3.firstName}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.firstName}</span>
          </div>
          <div>
            <h3>Last Name</h3>
            <TextInput
              name="lastName"
              placeholder="Enter the name"
              value={modalValues3.lastName}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1">
            <h3 className="">Email</h3>
            <TextInput
              name="email"
              value={modalValues3.email}
              placeholder="Enter email"
              marginBottom={8}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.email}</span>
          </div>
          <div className="grid grid-cols-1 mt-2">
            <h3 className="">Phone</h3>
            <TextInput
              name="phoneNumber"
              value={modalValues3.phoneNumber}
              placeholder="Enter phone"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1">
            <h3>Role</h3>
            {/* <TextInput
              name="role"
              value={modalValues.role}
              placeholder="Enter role"
              marginBottom={8}
              onChange={handleChange}
            /> */}
            <SelectMenu
              isMultiSelect
              name="role"
              title="Select multiple names"
              options={roles.map((role) => ({
                value: role.role_name,
                label: role.role_name,
              }))}
              value={modalValues3.role}
              selected={selectedItemsState}
              onSelect={(item) => {
                const selected = [...selectedItemsState, item.value];
                const selectedItems = selected;
                const selectedItemsLength = selectedItems.length;
                let selectedNames = '';
                if (selectedItemsLength === 0) {
                  selectedNames = '';
                } else if (selectedItemsLength === 1) {
                  selectedNames = selectedItems.toString();
                } else if (selectedItemsLength > 1) {
                  selectedNames =
                    selectedItemsLength.toString() + ' selected...';
                }
                setSelectedItems(selectedItems);
                setSelectedItemNames(selectedNames);
              }}
              onDeselect={(item) => {
                const deselectedItemIndex = selectedItemsState.indexOf(
                  item.value
                );
                const selectedItems = selectedItemsState.filter(
                  (_item, i) => i !== deselectedItemIndex
                );
                const selectedItemsLength = selectedItems.length;
                let selectedNames = '';
                if (selectedItemsLength === 0) {
                  selectedNames = '';
                } else if (selectedItemsLength === 1) {
                  selectedNames = selectedItems.toString();
                } else if (selectedItemsLength > 1) {
                  selectedNames =
                    selectedItemsLength.toString() + ' selected...';
                }

                setSelectedItems(selectedItems);
                setSelectedItemNames(selectedNames);
              }}
            >
              <Button>{selectedItemNamesState || 'Select roles...'}</Button>
            </SelectMenu>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1">
          <h3>Password</h3>
          <TextInput
            name="password"
            type="password"
            placeholder="Enter the password"
            value={modalValues3.password}
            marginBottom={8}
            marginRight={10}
            onChange={handleChange}
          />
          <span className="text-red-500">{modalErrors.password}</span>
        </div>
        <div className="grid grid-cols-1">
          <h3>Confirm Password</h3>
          <TextInput
            name="confirmPassword"
            type="password"
            placeholder="ReEnter password"
            value={modalValues3.confirmPassword}
            marginBottom={8}
            marginRight={10}
            onChange={handleChange}
          />
          <span className="text-red-500">{modalErrors.confirmPassword}</span>
        </div>
        <br />
        <hr />
        <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1">
            <h3>Department</h3>
            <TextInput
              name="department"
              value={modalValues3.details.department}
              placeholder="i.e. Department of Computer Science and Engineering"
              marginBottom={11}
              onChange={handleDetailChange}
            />
            <span className="text-red-500">{modalErrors.department}</span>
          </div>
          <div className="grid grid-cols-1">
            <h3>Faculty</h3>
            <TextInput
              name="faculty"
              value={modalValues3.details.faculty}
              placeholder="i.e. Professor"
              marginBottom={11}
              onChange={handleDetailChange}
            />
            <span className="text-red-500">{modalErrors.faculty}</span>
          </div>
          <div className="grid grid-cols-1">
            <h3>School</h3>
            <TextInput
              name="school"
              value={modalValues3.details.school}
              placeholder="i.e. School of Computing and Information Technology
              "
              marginBottom={11}
              onChange={handleDetailChange}
            />
            <span className="text-red-500">{modalErrors.school}</span>
          </div>
          <div className="grid grid-cols-1">
            <h3>Program</h3>
            <TextInput
              name="program"
              value={modalValues3.details.program}
              placeholder="i.e. MTech - Information Security "
              marginBottom={11}
              onChange={handleDetailChange}
            />
            <span className="text-red-500">{modalErrors.program}</span>
          </div>
        </div>
        {/* <Button onSubmit={handleSubmit}>Save</Button> */}
      </Dialog>
    </Pane>
  );
}

export default AddUserModal;
