import { Button, TextInput, IconButton, RefreshIcon } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import { Switch } from 'evergreen-ui';
import KPIRow2 from './KPIRow2';
import SideBar from './SideBar';
import UserModal from './modals/UserModal';
import AddRoles from './modals/AddRoles';
import AddUserModal from './modals/AddUserModal';
import api from '../api';

function KpiUser() {
  // //useState for disabling roles
  // const [status, setStatus] = useState(false);
  //Adding new user
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  //UseState
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState(0);
  const fetchUser = async () => {
    const res = await api.get(`/admin/user/all-user`);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
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
            onClick={() => fetchUser()}
          />
          <div className=" h-96 shadow overflow-auto border-b border-gray-200 sm:rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, _i) => (
                  <KPIRow2 user={user} i={_i} />
                ))}
              </tbody>
            </table>
            <AddUserModal
              setModalOpen3={setModalOpen3}
              modalOpen={modalOpen3}
            />
            <AddRoles setModalOpen2={setModalOpen2} modalOpen2={modalOpen2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KpiUser;
