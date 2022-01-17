import React from 'react';
import { Switch } from 'evergreen-ui';
import { useState } from 'react';
import { SelectMenu, Button } from 'evergreen-ui';
import { Pane, Pill } from 'evergreen-ui';
import {
  Tooltip,
  IconButton,
  ManualIcon,
  EditIcon,
  TrashIcon,
  majorScale,
} from 'evergreen-ui';
import UserModal from './modals/UserModal';
import ViewDetails from './modals/ViewDetails';

function KPIRow2({ user }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  return (
    <>
      <tr key={user.index}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{user.index}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-gray-900">
            {user.firstname}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex  leading-5 font-semibold rounded-full bg-green-100 text-sm text-gray-500">
            {user.email}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.role}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <Tooltip content="Edit details">
            <IconButton
              icon={EditIcon}
              onClick={() => {
                setModalOpen(true);
              }}
            />
          </Tooltip>
          <Tooltip content="View Details">
            <IconButton
              marginLeft={8}
              onClick={() => {
                setModalOpen1(true);
              }}
              marginRight={8}
              icon={ManualIcon}
            />
          </Tooltip>
          <Tooltip content="Delete User">
            <IconButton
              icon={TrashIcon}
              onClick={() => {
                console.log('User  is Deleted');
              }}
              intent="danger"
              marginLeft={2}
            />
          </Tooltip>
        </td>
      </tr>
      <UserModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        title="User Update Information"
        user={user}
      />
      <ViewDetails
        setModalOpen1={setModalOpen1}
        modalOpen1={modalOpen1}
        user={user}
      />
    </>
  );
}

export default KPIRow2;
