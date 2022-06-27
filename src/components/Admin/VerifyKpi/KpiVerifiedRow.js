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

function KpiVerifiedRow({ verify, kpiId, render, setRender }) {
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
  const handleMergeData = () => {
    setLoading(true);
    try {
      const res = api.post(`/admin/sheet/update-mainkpi/${kpiId}`,values);
      if (res.status !== 200) throw 'Request Failed';
      toaster.success('KPI merged successfully!');
    } catch (error) {
      toaster.danger('Something went wrong');
    } finally {
      setRender(!render);
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
          {verify.uploaded_sheets_status === 'verified' ? (
            <Tooltip content="Verified">
              <Button
                marginY={8}
                marginRight={12}
                iconBefore={ApplicationsIcon}
                color="green"
                onClick={() => {
                  handleMergeData();
                }}
                // disabled
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
                disabled
              >
                Merged
              </Button>
            </Tooltip>
          )}
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KpiVerifiedRow;
