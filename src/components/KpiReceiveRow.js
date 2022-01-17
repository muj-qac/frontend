import {
  Button,
  CircleArrowDownIcon,
  CogIcon,
  CrossIcon,
  IconButton,
  majorScale,
  Pane,
  Table,
  TickIcon,
  Tooltip,
  UploadIcon,
} from 'evergreen-ui';
import { useState } from 'react';

function KpiReceiveRow({ user }) {
  const [title, setTitle] = useState('');

  return (
    <Pane>
      <Table.Row key={user.id} isSelectable>
        <Table.TextCell>
          {user.firstName} {user.lastName}
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Download Filled Data">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={CircleArrowDownIcon}
            >
              Download
            </Button>
          </Tooltip>
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Verify">
            <IconButton
              icon={TickIcon}
              marginRight={majorScale(2)}
              intent="success"
            />
          </Tooltip>
          <Tooltip content="Reject">
            <IconButton
              icon={CrossIcon}
              marginRight={majorScale(2)}
              intent="danger"
            />
          </Tooltip>
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KpiReceiveRow;
