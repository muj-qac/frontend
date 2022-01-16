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
import FacultyUploadModal from '../modals/FacultyUploadModal';

function FacultyTableRow({ kpi }) {
  const [title, setTitle] = useState('');
  const [isShown, setIsShown] = useState(false);
  return (
    <Pane>
      <Table.Row
        key={kpi.id}
        isSelectable
        //   onSelect={() => alert(kpi.title)}
      >
        <Table.TextCell>{kpi.title}</Table.TextCell>
        <Table.TextCell>
          {kpi.status !== 'Active' ? (
            <Badge color="red" marginRight={8}>
              Incomplete
            </Badge>
          ) : (
            <Badge color="green" marginRight={8}>
              Complete
            </Badge>
          )}
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="More Information">
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
          <Tooltip content="Download KPI Schema">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={CircleArrowDownIcon}
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
      />
    </Pane>
  );
}

export default FacultyTableRow;
