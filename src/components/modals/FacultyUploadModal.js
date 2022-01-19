import axios from '../../api';
import { Dialog, FilePicker, Pane } from 'evergreen-ui';
import { useState } from 'react';

function FacultyUploadModal({ setIsShown, isShown, title }) {
  const [loading, setLoading] = useState(false);
  // const [file, setFile] = useState();
  let formData = new FormData();
  formData.append('file', File);
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
          const res = await axios.post(`/user/upload/${title}`, formData);
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
            // setFile(files);
          }}
          accept=".xlsx"
          placeholder="Select the file here!"
        />
      </Dialog>
    </Pane>
  );
}

export default FacultyUploadModal;
