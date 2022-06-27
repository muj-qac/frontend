import {
  ApplicationsIcon,
  Button,
  CircleArrowDownIcon,
  CogIcon,
  CrossIcon,
  IconButton,
  majorScale,
  Pane,
  Table,
  TickIcon,
  toaster,
  Tooltip,
  UploadIcon,
} from 'evergreen-ui';
import { useState } from 'react';
import api from '../../../api';

function KpiVerifiedRow({ verify, kpiId }) {
  // const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const handleDownload = () => {
    // const encode = verify.uploaded_sheets_aws_key.replace(/\//g, '%2F');
    const encode = btoa(verify.uploaded_sheets_aws_key);
    window.open(
      `https://api.mujep.in/api/v1/admin/sheet/get-verified-object/${encode}`
    );
  };
  let values = {
    masterFileKey: `merged/${kpiId}.xlsx`,
    fileKey: verify.uploaded_sheets_aws_key,
  };
  const handleMergeData = async () => {
    setLoading(true);
    try {
      const res = await api.post(
        `/admin/sheet/update-mainkpi/${kpiId}`,
        values
      );
      if (res.message !== 'success') throw 'Request Failed';
      toaster.success('KPI merged successfully!');
    } catch (error) {
      toaster.danger('Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Pane>
      <Table.Row key={verify.uploaded_sheets_id} isSelectable>
        <Table.TextCell>
          {verify.user_id_first_name} {verify.user_id_last_name}
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Download Verified Data">
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
          {/* <Tooltip content="Verify">
            <IconButton
              icon={TickIcon}
              marginRight={majorScale(2)}
              intent="success"
            />
          </Tooltip> */}
          {/* <div className=" h-4 w-4 rounded-full bg-emerald-400"></div> */}
          {verify.status === 'merged' ? (
            <Tooltip content="Verified">
              <Button
                marginY={8}
                marginRight={12}
                iconBefore={ApplicationsIcon}
                color="green"
              >
                Merge Data
              </Button>
            </Tooltip>
          ) : (
            <Tooltip content="Merge Data">
              <Button
                isLoading={loading}
                marginY={8}
                marginRight={12}
                iconBefore={ApplicationsIcon}
                color="orange"
                onClick={() => {
                  handleMergeData();
                }}
              >
                Merge Data
              </Button>
            </Tooltip>
          )}
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KpiVerifiedRow;
