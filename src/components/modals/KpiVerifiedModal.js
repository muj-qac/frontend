import { Dialog, Pane } from 'evergreen-ui';
import { useState } from 'react';
import KpiVerifiedTable from '../KpiVerifiedTable';

function KpiVerifiedModal({ setIsShown, isShown, title }) {
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
        hasFooter={false}
        hasCancel={false}
        onConfirm={() => {
          setLoading(true);
        }}
        isConfirmLoading={loading}
        minHeightContent={400}
        width={1000}
      >
        {/* <KpiReceiveTable /> */}
        <KpiVerifiedTable title={title} />
        <br />
      </Dialog>
    </Pane>
  );
}

export default KpiVerifiedModal;
