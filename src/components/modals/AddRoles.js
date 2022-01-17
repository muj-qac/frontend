import React from "react";
import {
  Pane,
  Dialog,
  TextInput,
  Table,
  Button,
  TableBody,
  TableRow,
} from "evergreen-ui";
import { useState } from "react";
function AddRoles({ setModalOpen2, modalOpen2 }) {
  //useState for roles
  const [roles, setRoles] = useState([]);
  //USeState for addition of roles
  const [addData, setAddData] = useState({ role: "" });
  //function to setroles
  const handleAddChange = (e) => {
    e.preventDefault();
    const roleName = e.target.getAttribute("name");
    const roleValue = e.target.value;
    const newRoleData = { ...addData };
    newRoleData[roleName] = roleValue;
    setAddData(newRoleData);
  };
  //To submit
  const AddButton = (e) => {
    e.preventDefault();
    const newRole = {
      role: addData.role,
    };
    const newRoles = [...roles, newRole];
    console.log(newRoles);
    setRoles(newRoles);
  };
  return (
    <Pane>
      <Dialog
        isShown={modalOpen2}
        onCloseComplete={() => setModalOpen2(false)}
        preventBodyScrolling
        hasCancel={false}
        confirmLabel="Save"
        width={500}
        // onConfirm={handleSubmit}
      >
        {/* <Button onSubmit={handleSubmit}>Save</Button> */}
        <div className="mb-5">
          <TextInput
            name="role"
            placeholder="Enter role"
            marginTop={4}
            marginLeft={4}
            onChange={handleAddChange}
          />
          <Button marginBottom={3} onClick={AddButton}>
            Add Roles
          </Button>
        </div>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Roles</Table.TextHeaderCell>
          </Table.Head>
          <TableBody></TableBody>
        </Table>
      </Dialog>
    </Pane>
  );
}

export default AddRoles;
