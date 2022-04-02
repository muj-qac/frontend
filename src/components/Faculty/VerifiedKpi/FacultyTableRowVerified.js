import {
  Badge,
  Button,
  CircleArrowDownIcon,
  Pane,
  Table,
  Tooltip,
  UploadIcon,
} from 'evergreen-ui';
import { useState } from 'react';
import api from '../../../api';
import FacultyUploadModal from '../modals/FacultyUploadModal';

function FacultyTableRowVerified({ kpi }) {
  const [title, setTitle] = useState('');
  const [isShown, setIsShown] = useState(false);

  const handleDownload = () => {
    const encode = kpi.key.replace(/\//g, '%2F');
    console.log(encode);
    window.open(
      `http://localhost:5000/api/v1/user/download-verified-kpi/${encode}`
    );
  };

  return (
    <Pane>
      <Table.Row
        key={kpi.id}
        isSelectable
        //   onSelect={() => alert(kpi.title)}
      >
        <Table.TextCell>{kpi.kpiName}</Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Download KPI Schema">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={CircleArrowDownIcon}
              onClick={handleDownload}
            >
              Download
            </Button>
          </Tooltip>
        </Table.TextCell>
      </Table.Row>
      <FacultyUploadModal
        setIsShown={setIsShown}
        isShown={isShown}
        title={kpi.title}
        id={kpi.id}
      />
    </Pane>
  );
}

export default FacultyTableRowVerified;
