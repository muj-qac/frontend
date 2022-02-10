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
import api from '../../api';
import FacultyUploadModal from '../modals/FacultyUploadModal';

function FacultyTableRow({ kpi }) {
  const [title, setTitle] = useState('');
  const [isShown, setIsShown] = useState(false);

  const handleDownload = () => {
    window.open(`http://localhost:5000/api/v1/user/download/${kpi.sheet_id}`);
  };

  return (
    <Pane>
      <Table.Row
        key={kpi.id}
        isSelectable
        //   onSelect={() => alert(kpi.title)}
      >
        <Table.TextCell>{kpi.name}</Table.TextCell>
        <Table.TextCell>
          {kpi.status === 'pending' && (
            <Badge color="red" marginRight={8}>
              {kpi.status}
            </Badge>
          )}
          {kpi.status === 'processing' && (
            <Badge color="yellow" marginRight={8}>
              {kpi.status}
            </Badge>
          )}
          {kpi.status === 'verified' && (
            <Badge color="green" marginRight={8}>
              {kpi.status}
            </Badge>
          )}
        </Table.TextCell>
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
          {kpi.status === 'pending' && (
            <Tooltip content="Upload Completed KPI">
              <Button
                marginY={8}
                marginRight={12}
                iconBefore={UploadIcon}
                onClick={() => {
                  setIsShown(true);
                  setTitle(`${kpi.title}`);
                }}
              >
                Upload
              </Button>
            </Tooltip>
          )}
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

export default FacultyTableRow;
