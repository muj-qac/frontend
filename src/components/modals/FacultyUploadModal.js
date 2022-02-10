import axios from '../../api';
import { Dialog, FilePicker, Pane } from 'evergreen-ui';
import { useState } from 'react';

function FacultyUploadModal({ setIsShown, isShown, id, title }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  let formData = new FormData();
  formData.append('file', file);
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title={title}
        onCloseComplete={() => setIsShown(false)}
        preventBodyScrolling
        confirmLabel="Save"
        hasCancel={false}
        onConfirm={async () => {
          const res = await axios.post(`/user/upload/${id}`, formData);
          setIsShown(false);
          console.log(res.data);
        }}
        isConfirmLoading={loading}
      >
        KPI Information:-
        <br />
        <FilePicker
          className=" py-5"
          multiple
          width={250}
          onChange={(files) => {
            console.log(files);
            setFile(files[0]);
          }}
          accept=".xlsx"
          placeholder="Select the file here!"
        />
      </Dialog>
    </Pane>
  );
}

export default FacultyUploadModal;
