import React from "react";
import {
  Button,
  Dialog,
  FilePicker,
  Pane,
  TextInput,
  Avatar,
  Pill,
} from "evergreen-ui";
import { useState, useEffect } from "react";
function ViewDetails({ setModalOpen1, modalOpen1, user }) {
  return (
    <Pane>
      <Dialog
        isShown={modalOpen1}
        onCloseComplete={() => setModalOpen1(false)}
        preventBodyScrolling
        hasCancel={false}
        confirmLabel="OK"
        width={800}
      >
        <div className="grid grid-cols-1 justify-items-center mb-10">
          <Avatar name={user.firstName} size={150} marginRight={16} />
          <h1 className="text-xl font-semibold pb-8">
            {user.firstName} Information
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="mb-5">
            <h3 className="font-semibold">First Name</h3>
            <span>{user.firstName}</span>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold">Last Name</h3>
            <span>{user.lastName}</span>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <span>{user.email}</span>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <span>{user.phoneNumber}</span>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Roles</h3>

            <span className="ml-0">
              {user.role.map((val) => (
                <Pill color="green" marginLeft={6} marginBottom={10} width={50}>
                  {val}
                </Pill>
              ))}
            </span>
          </div>
        </div>

        <br />
        <hr />
        <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
        <div className="grid grid-cols-2">
          <div className="mr-10 mb-8">
            <h3 className="font-semibold">Department</h3>

            <span>{user.details.department}</span>
          </div>
          <div>
            <h3 className="font-semibold">Faculty</h3>
            <span>{user.details.faculty}</span>
          </div>
          <div className="mr-10">
            <h3 className="font-semibold">School</h3>
            <span>{user.details.school}</span>
          </div>
          <div>
            <h3 className="font-semibold">Program</h3>
            <span>{user.details.program}</span>
          </div>
        </div>
        {/* <Button onSubmit={handleSubmit}>Save</Button> */}
      </Dialog>
    </Pane>
  );
}

export default ViewDetails;
