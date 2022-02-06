import React from 'react';
import { InfoSignIcon, Switch } from 'evergreen-ui';
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
import DeleteModal from './modals/DeleteModal';
import api from '../api';

function KPIRow2({ user, i }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  // const [put, setPut] = useState(false);
  return (
    <>
      <tr key={user.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{i + 1}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-900">
            {user.last_name === null
              ? `${user.first_name}`
              : `${user.first_name} ${user.last_name}`}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex  leading-5 font-semibold rounded-full text-sm text-gray-500">
            {user.email}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="grid grid-cols-3">
            {user.role.map((val) => (
              <Pill marginLeft={8} color="green" marginBottom={10}>
                {val}
              </Pill>
            ))}
          </div>
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
              icon={InfoSignIcon}
            />
          </Tooltip>
          <Tooltip content="Delete User">
            <IconButton
              icon={TrashIcon}
              onClick={() => {
                setModalOpen4(true);
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
        title="Update User Information"
        user={user}
      />
      <ViewDetails
        setModalOpen1={setModalOpen1}
        modalOpen1={modalOpen1}
        user={user}
      />
      <DeleteModal
        setModalOpen4={setModalOpen4}
        modalOpen={modalOpen4}
        user={user}
      />
    </>
  );
}

export default KPIRow2;
