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
import api from '../api';

function KpiReceiveRow({ user }) {
  // const [title, setTitle] = useState('');
  const handleDownload = () => {
    const encode = user.uploaded_sheets_aws_key.replace(/\//g, '%2F');
    console.log(encode);
    window.open(
      `http://localhost:5000/api/v1/admin/sheet/get-unverified-object/${encode}`
    );
  };
  return (
    <Pane>
      <Table.Row key={user.id} isSelectable>
        <Table.TextCell>
          {user.user_id_first_name} {user.user_id_last_name}
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Download Filled Data">
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
        <Table.TextCell>
          <Tooltip content="Verify">
            <IconButton
              icon={TickIcon}
              marginRight={majorScale(2)}
              intent="success"
              onClick={() => {
                api.put(`/admin/sheet/verify-kpi`, {
                  fileKey: user.uploaded_sheets_aws_key,
                });
              }}
            />
          </Tooltip>
          <Tooltip content="Reject">
            <IconButton
              icon={CrossIcon}
              marginRight={majorScale(2)}
              intent="danger"
              onClick={() => {
                api.put(`/admin/sheet/reject-kpi`, {
                  fileKey: user.uploaded_sheets_aws_key,
                });
              }}
            />
          </Tooltip>
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KpiReceiveRow;
