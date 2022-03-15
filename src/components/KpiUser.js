import {
  Button,
  TextInput,
  IconButton,
  RefreshIcon,
  Table,
  Spinner,
} from "evergreen-ui";
import { useEffect, useState } from "react";
import { Switch } from "evergreen-ui";
import KPIRow2 from "./KPIRow2";
import SideBar from "./SideBar";
import UserModal from "./modals/UserModal";
import AddRoles from "./modals/AddRoles";
import AddUserModal from "./modals/AddUserModal";
import api from "../api";

function KpiUser() {
  // //useState for disabling roles
  // const [status, setStatus] = useState(false);
  //Adding new user
  // const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [render, setRender] = useState(false);
  // const [modalOpen4, setModalOpen4] = useState(false);
  //UseState
  const [users, setUsers] = useState([]);
  // const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchUser = async () => {
    setLoading(false);
    try {
      const res = await api.get(`/admin/user/all-user`);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [render]);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <Button
            marginBottom={10}
            onClick={() => {
              setModalOpen3(true);
            }}
          >
            Add User
          </Button>
          <Button
            marginBottom={10}
            marginLeft={4}
            onClick={() => {
              setModalOpen2(true);
            }}
          >
            Add/Delete Roles
          </Button>
          <IconButton
            icon={RefreshIcon}
            marginBottom={10}
            marginLeft={4}
            className=" float-right"
            onClick={() => setRender(!render)}
          />
          <Table>
            <Table.Head>
              <Table.TextHeaderCell flexBasis={50} flexShrink={0} flexGrow={0}>
                Id
              </Table.TextHeaderCell>
              <Table.TextHeaderCell flexBasis={150} flexShrink={0} flexGrow={0}>
                Name
              </Table.TextHeaderCell>
              <Table.TextHeaderCell flexBasis={150} flexShrink={0} flexGrow={0}>
                Email
              </Table.TextHeaderCell>
              <Table.TextHeaderCell>Role</Table.TextHeaderCell>
              <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
                Edit
              </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={400}>
              {loading ? (
                users.map((user, _i) => (
                  <KPIRow2
                    user={user}
                    i={_i}
                    setRender={setRender}
                    render={render}
                    // modalOpen={modalOpen}
                    // setModalOpen={setModalOpen}
                    // modalOpen4={modalOpen4}
                    // setModalOpen4={setModalOpen4}
                  />
                ))
              ) : (
                <Spinner marginX="auto" marginY={120} />
              )}
            </Table.Body>
          </Table>
          <AddUserModal
            setModalOpen3={setModalOpen3}
            modalOpen3={modalOpen3}
            fetchUser={fetchUser}
            render={render}
            setRender={setRender}
          />
          <AddRoles
            setModalOpen2={setModalOpen2}
            modalOpen2={modalOpen2}
            setRender={setRender}
            render={render}
          />
        </div>
      </div>
    </div>
  );
}

export default KpiUser;
