import { Button, Dialog, FilePicker, Pane, TextInput } from "evergreen-ui";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function DeleteModal({ setModalOpen4, modalOpen, user }) {
  const initialValues = {
    email: user.email,
  };
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  //Submitting the form
  const handleSubmit = () => {
    // setModalValues4(email);
    setIsSubmit(true);
    console.log(initialValues);
    setModalOpen4(false);
  };

  return (
    <Pane>
      <Dialog
        isShown={modalOpen}
        onCloseComplete={() => setModalOpen4(false)}
        preventBodyScrolling
        hasCancel={false}
        confirmLabel="Confirm"
        title="Are You Sure You Want to Delete this User?"
        width={800}
        onConfirm={handleSubmit}
      ></Dialog>
    </Pane>
  );
}

export default DeleteModal;
