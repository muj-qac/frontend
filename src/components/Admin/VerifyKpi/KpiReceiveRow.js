import {
  Button,
  CircleArrowDownIcon,
  CrossIcon,
  FilePicker,
  IconButton,
  majorScale,
  Pane,
  Popover,
  Position,
  Table,
  Textarea,
  TickIcon,
  toaster,
  Tooltip,
} from 'evergreen-ui';
import { useState } from 'react';
import api from '../../../api';

function KpiReceiveRow({ user, render, setRender }) {
  // const [title, setTitle] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [text, setText] = useState('');
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  let formData = new FormData();
  formData.append('file', file);
  formData.append('comment', text);
  formData.append('fileKey', user.uploaded_sheets_aws_key);
  const handleDownload = () => {
    // const encode = user.uploaded_sheets_aws_key.replace(/\//g, '%2F');
    const encode = btoa(user.uploaded_sheets_aws_key);
    // console.log(encode);
    window.open(
      `https://api.mujep.in/api/v1/admin/sheet/get-unverified-object/${encode}`
    );
  };
  // console.log(formData);
  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await api.put(`/admin/sheet/verify-kpi`, {
        fileKey: user.uploaded_sheets_aws_key,
      });
      if (res.status !== 200) throw 'Request Failed';
      toaster.success('KPI verified successfully!');
    } catch (error) {
      toaster.success('KPI verified successfully!');
    } finally {
      setRender(!render);
      setLoading(false);
    }
  };
  const handleReject = async () => {
    setLoading(true);
    try {
      const res = await api.post(
        `/admin/sheet/reject-kpi/${user.user_id_id}`,
        formData
      );
      if (res.status !== 200) throw 'Request Failed';
      toaster.success('KPI rejected successfully!');
    } catch (error) {
      toaster.danger('Something went wrong');
    } finally {
      setRender(!render);
      setLoading(false);
    }
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
              isLoading={loading}
              onClick={handleVerify}
            />
          </Tooltip>
          <Tooltip content="Reject">
            <Popover
              bringFocusInside
              // handleReject={handleReject}
              content={({ close }) => (
                <Pane
                  width={320}
                  height={320}
                  paddingX={40}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  flexDirection="column"
                >
                  <FilePicker
                    className=" py-5"
                    multiple
                    width={250}
                    onChange={(files) => {
                      console.log(files);
                      setFile(files[0]);
                    }}
                    accept=".xlsx"
                    placeholder="Select the file here!"
                  />
                  <Textarea
                    name="textarea-1"
                    placeholder="Textarea placeholder..."
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                  <Pane
                    display="flex"
                    justifyContent="space-between"
                    width={200}
                  >
                    <Button onClick={close}>Close</Button>
                    <Button
                      appearance="primary"
                      onClick={handleReject}
                      isLoading={loading}
                    >
                      Save
                    </Button>
                  </Pane>
                </Pane>
              )}
              position={Position.RIGHT}
              shouldCloseOnExternalClick={false}
            >
              <IconButton
                icon={CrossIcon}
                marginRight={majorScale(2)}
                intent="danger"
                onClick={() => {
                  setIsShown(true);
                }}
              />
            </Popover>
          </Tooltip>
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KpiReceiveRow;
