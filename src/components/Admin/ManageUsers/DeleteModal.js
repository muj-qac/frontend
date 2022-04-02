import {
  Button,
  Dialog,
  FilePicker,
  Pane,
  TextInput,
  toaster,
} from 'evergreen-ui';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import api from '../../../api';

function DeleteModal({ setModalOpen4, modalOpen4, user, setRender, render }) {
  const initialValues = {
    email: user.email,
  };
  //A flag to submit the form
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //Submitting the form
  const handleSubmit = async () => {
    // setModalValues4(email);
    setIsSubmit(true);
    console.log(initialValues);
    setIsLoading(true);
    try {
      const res = await api.delete(`/admin/user/profile/${user.email}`);
      setModalOpen4(false);
      if (res.status !== 201) throw 'Request Failed';
      toaster.success('User Deleted successfully!');
    } catch (error) {
      toaster.danger('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Pane>
      <Dialog
        isShown={modalOpen4}
        onCloseComplete={() => {
          setModalOpen4(false);
          setRender(!render);
        }}
        preventBodyScrolling
        hasCancel={false}
        confirmLabel="Confirm"
        title="Are You Sure You Want to Delete this User?"
        width={800}
        onConfirm={handleSubmit}
        isConfirmLoading={isLoading}
      ></Dialog>
    </Pane>
  );
}

export default DeleteModal;
