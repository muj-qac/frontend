import React, { useState, useEffect } from 'react';

import {
  Table,
  Heading,
  Text,
  Pane,
  EditIcon,
  IconButton,
  TextInput,
  TickIcon,
  Button,
  ChevronRightIcon,
  PlusIcon,
  toaster,
} from 'evergreen-ui';
import ColumnTableRow from './ColumnTableRow';
import api from '../../api';

const getNewColumn = () => ({
  id: `${(Math.random() + 1).toString(36).substring(7)}`,
  name: 'Sample Column Heading',
  rule: null,
  type: 'text',
  invalidAction: 'reject',
});

const ColumnTable = () => {
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(true);
  const [sheetHeading, setSheetHeading] = useState('Untitled Sheet');
  const [columns, setColumns] = useState([getNewColumn()]);

  const handleNewColumn = () => {
    setColumns([...columns, getNewColumn()]);
  };

  const handleDeleteColumn = (id) => {
    setColumns([...columns].filter((column) => column.id !== id));
  };

  const handleSetColumnData = (id, newData) => {
    setColumns(
      [...columns].map((column) => {
        return column.id === id ? { ...newData } : column;
      })
    );
  };

  const handleSubmit = async () => {
    setIsSubmitLoading(true);
    try {
      console.log(columns);
      // const res = await api.post(
      //   'http://localhost:5000/api/v1/admin/sheet/new/',
      //   {
      //     // method: 'post',
      //     headers: {
      //       Accept: 'application/json, text/plain, */*',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ columns, title: sheetHeading }),
      //   }
      // );
      const res = await api.post(
        '/admin/sheet/new/',
        { columns, title: sheetHeading },
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res);
      if (!res.ok) throw 'Request Failed';
      toaster.success('KPI created successfully!');
    } catch (error) {
      toaster.danger('Something went wrong!');
      console.log(error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  useEffect(() => {
    if (columns.length === 1) setIsDeleteDisabled(true);
    else setIsDeleteDisabled(false);
  }, [columns]);

  return (
    <Pane elevation={1} padding={50} paddingTop={20}>
      <Pane
        alignContent="center"
        alignItems="center"
        flexDirection="row"
        display="flex"
        justifyContent="space-between"
        marginBottom={20}
      >
        <Pane>
          <Text color="gray600">KPI Title</Text>
          {isEditingHeading ? (
            <Pane alignItems="center" flexDirection="row" display="flex">
              <TextInput
                value={sheetHeading}
                onChange={(e) => {
                  setSheetHeading(e.target.value);
                }}
                color="gray700"
                fontWeight="600"
                placeholder="Untitled KPI"
              />
              <IconButton
                icon={TickIcon}
                appearance="minimal"
                width="30px"
                marginLeft="10px"
                onClick={() => {
                  setIsEditingHeading(false);
                }}
              />
            </Pane>
          ) : (
            <Pane alignItems="center" flexDirection="row" display="flex">
              <Heading size={600} color="gray700" fontWeight="600">
                {sheetHeading}
              </Heading>
              <IconButton
                icon={EditIcon}
                appearance="minimal"
                width="30px"
                marginLeft="10px"
                onClick={() => {
                  setIsEditingHeading(true);
                }}
              />
            </Pane>
          )}
        </Pane>
        <Button
          appearance="primary"
          iconAfter={ChevronRightIcon}
          onClick={handleSubmit}
          isLoading={isSubmitLoading}
        >
          Done
        </Button>
      </Pane>
      <Pane>
        <Pane
          alignContent="center"
          alignItems="center"
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
        >
          <Text color="gray600">Columns</Text>
          <Button
            marginLeft={10}
            marginBottom={10}
            iconBefore={PlusIcon}
            onClick={handleNewColumn}
          >
            New Column
          </Button>
        </Pane>
        <Table textAlign="center">
          <Table.Head>
            <Table.TextHeaderCell flexBasis={320} textAlign="left">
              Name
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>Type</Table.TextHeaderCell>
            <Table.TextHeaderCell>Validation</Table.TextHeaderCell>
            <Table.TextHeaderCell>Action</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height="100%">
            {columns.map((column) => (
              <ColumnTableRow
                key={column.id}
                column={column}
                handleSetColumnData={handleSetColumnData}
                handleDeleteColumn={handleDeleteColumn}
                isDeleteDisabled={isDeleteDisabled}
              />
            ))}
          </Table.Body>
        </Table>
      </Pane>
    </Pane>
  );
};

export default ColumnTable;
