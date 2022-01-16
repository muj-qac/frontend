import { Dialog, FilePicker, Pane } from 'evergreen-ui';
import { useState } from 'react';

function FacultyUploadModal({ setIsShown, isShown, title }) {
  const [loading, setLoading] = useState(false);
  // const [file, setFile] = useState('');
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title={title}
        onCloseComplete={() => setIsShown(false)}
        preventBodyScrolling
        confirmLabel="Save"
        hasCancel={false}
        onConfirm={() => {
          setLoading(true);
        }}
        isConfirmLoading={loading}
      >
        KPI Information:-
        <br />
        <FilePicker
          className=" py-5"
          multiple
          width={250}
          onChange={(files) => console.log(files)}
          accept=".xlsx"
          placeholder="Select the file here!"
        />
      </Dialog>
    </Pane>
  );
}

export default FacultyUploadModal;
