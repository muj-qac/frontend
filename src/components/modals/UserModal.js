import { Button, Dialog, FilePicker, Pane, TextInput } from 'evergreen-ui';
import { useState, useEffect } from 'react';
import React from 'react';
import { SelectMenu } from 'evergreen-ui';
import api from '../../api';

function UserModal({ setModalOpen, modalOpen, title, user, put }) {
  // const profile = ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber'];

  const [roles, setRoles] = useState([]);

  //!Roles do not render Get roles working do not erase this code
  useEffect(() => {
    const fetchRole = async () => {
      const res = await api.get(`/admin/role/get-roles`);
      setRoles(res.data);
      // console.log(res.data);
    };
    fetchRole();
  }, []);

  const initialValues = {
    index: user.index,
    first_name: user.first_name,
    last_name: user.last_name,
    phone_number: user.phone_number,
    email: user.email,
    // role: user.role,
  };
  const initialDetailsValues = {
    details: {
      department: user.details.department,
      faculty: user.details.faculty,
      program: user.details.program,
      school: user.details.school,
    },
  };
  const RoleIntialValue = { role: user.role };
  //UseState for the form values
  const [modalValues, setModalValues] = useState({
    ...initialValues,
    ...initialDetailsValues,
  });
  //errors for validating the form values
  const [modalErrors, setModalErrors] = useState({});
  // //for roles to be displayed in modals
  const [selectedItemsState, setSelectedItems] = useState(user.role);
  const [selectedItemNamesState, setSelectedItemNames] = useState(
    user.role.length + ' selected...'
  );
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    // console.log(selectedItemsState);
    setModalValues({ ...modalValues, role: selectedItemsState });
  }, [selectedItemsState]);

  //UseEffect to enable to submit the form when it all validation is cleared
  useEffect(() => {
    if (Object.keys(modalErrors).length === 0 && isSubmit) {
      // console.log(modalValues);
      try {
        api.put(`/admin/user/profile/${user.email}`, modalValues);
        setModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [modalErrors]);
  //handleChange for looking for the changes when someone types something in the input fields
  // Validation for the modal
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = '*First Name is required';
    }
    if (!values.email) {
      errors.email = '*Required';
    }
    // if (!values.details.department) {
    //   errors.department = "*Required";
    // }
    // if (!values.details.faculty) {
    //   errors.faculty = "*Required";
    // }
    // if (!values.details.school) {
    //   errors.school = "*Required";
    // }
    // if (!values.details.program) {
    //   errors.program = "*Required";
    // }
    return errors;
  };
  const handleChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setModalValues({ ...modalValues, [name]: value });
  };
  const handleDetailChange = (e) => {
    //Destructuring the form values
    const { name, value } = e.target;
    setModalValues({ ...modalValues, details: { [name]: value } });
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
              name="first_name"
              placeholder="Enter the name"
              value={modalValues.first_name}
              marginBottom={8}
              marginRight={10}
              onChange={handleChange}
            />
            <span className="text-red-500">{modalErrors.first_name}</span>
          </div>
          <div>
            <h3>Last Name</h3>
            <TextInput
              name="last_name"
              placeholder="Enter the name"
              value={modalValues.last_name}
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
              name="phone_number"
              value={modalValues.phone_number}
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
              onClose={handleChange}
              isMultiSelect
              name="role"
              title="Select multiple names"
              options={roles.map((role) => ({
                value: role.role_name,
                label: role.role_name,
              }))}
              value={modalValues.role}
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
                console.log(selectedItems);
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
                console.log(selectedItems);
              }}
            >
              <Button
                onClick={() => {
                  setModalValues({
                    ...modalValues,
                    roles: {},
                  });
                }}
              >
                {selectedItemNamesState || 'Select roles...'}
              </Button>
            </SelectMenu>
          </div>
        </div>
        <br />
        <hr />
        <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-1">
            <h3>Department</h3>
            <TextInput
              name="department"
              value={modalValues.details.department}
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
              value={modalValues.details.faculty}
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
              value={modalValues.details.school}
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
              value={modalValues.details.program}
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

export default UserModal;
