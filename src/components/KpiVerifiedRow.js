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

function KpiVerifiedRow({ verify }) {
  const [title, setTitle] = useState('');

  return (
    <Pane>
      <Table.Row key={verify.id} isSelectable>
        <Table.TextCell>
          {verify.firstName} {verify.lastName}
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
          {/* <Tooltip content="Verify">
            <IconButton
              icon={TickIcon}
              marginRight={majorScale(2)}
              intent="success"
            />
          </Tooltip> */}
          <div className=" h-4 w-4 rounded-full bg-emerald-400"></div>
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KpiVerifiedRow;
