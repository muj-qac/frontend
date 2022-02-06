import React, { useEffect, useRef } from 'react';
import {
  Pane,
  Dialog,
  TextInput,
  Table,
  TableBody,
  TableRow,
  Badge,
  IconButton,
  TrashIcon,
  majorScale,
  AddIcon,
  toaster,
  Button,
  Popover,
  Position,
} from 'evergreen-ui';
import { role } from '../../data/role';
import { useState } from 'react';
import api from '../../api';
function AddRoles({ setModalOpen2, modalOpen2 }) {
  const elementRef = useRef();
  const [list, setList] = useState([]);

  //!Roles do not render Get roles working do not erase this code
  const fetchRole = async () => {
    const res = await api.get(`/admin/role/get-roles`);
    setList(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchRole();
    console.log(list);
  }, []);

  const handleAddChange = () => {
    let roles = { role_name: elementRef.current.value };
    console.log(list);
    if (
      roles.role_name &&
      list.some((e) => e.role_name === roles.role_name) === false
    ) {
      try {
        api.post('/admin/role/add-roles', roles);
        fetchRole();
      } catch (error) {
        console.log(error);
      }
    } else if (list.some((e) => e.role_name === roles.role_name) === true) {
      return toaster.danger('Role Already Exist', {
        id: 'forbidden-action',
        duration: 3,
      });
    } else {
      return toaster.danger('Invalid Input', {
        id: 'forbidden-action',
        duration: 3,
      });
    }
  };

  const handleDeleteChange = (index) => {
    api.delete(`/admin/role/delete-role/${list[index].role_name}`);
    fetchRole();
  };
  return (
    <Pane>
      <Dialog
        isShown={modalOpen2}
        onCloseComplete={() => setModalOpen2(false)}
        preventBodyScrolling
        hasFooter={false}
        hasCancel={false}
        confirmLabel="Save"
        width={500}
        minHeightContent={300}
        // onConfirm={handleSubmit}
      >
        {/* <Button onSubmit={handleSubmit}>Save</Button> */}
        <div className="mb-5">
          <TextInput
            id="roleInput"
            name="role"
            placeholder="Enter role"
            autoComplete="off"
            marginTop={4}
            marginLeft={4}
            ref={elementRef}
            // onChange={(e) => setRoles(e.target.value)}
          />
          <IconButton
            icon={AddIcon}
            iconSize={20}
            appearance="primary"
            intent="success"
            marginRight={majorScale(2)}
            marginLeft={20}
            onClick={handleAddChange}
          />
        </div>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Roles</Table.TextHeaderCell>
            <Table.TextHeaderCell>Delete</Table.TextHeaderCell>
          </Table.Head>
          <TableBody>
            {list.map((r, i) => {
              // console.log(r.role_name);
              return (
                <Table.Row key={r.id} isSelectable>
                  <Table.TextCell>{r.role_name}</Table.TextCell>
                  <Table.TextCell>
                    <Popover
                      content={({ close }) => (
                        <Pane
                          width={250}
                          height={200}
                          paddingX={40}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexDirection="column"
                        >
                          <span className=" text-red-600 font-semibold text-sm">
                            PLEASE CARE THAT ROLE IS NOT APPLIED TO SOME KPI
                          </span>
                          <Button onClick={close} marginTop={20}>
                            Close
                          </Button>
                          <Button
                            onClick={() => {
                              handleDeleteChange(i);
                              close();
                            }}
                            intent="danger"
                            marginTop={20}
                          >
                            Confirm
                          </Button>
                        </Pane>
                      )}
                      shouldCloseOnExternalClick={false}
                      position={Position.RIGHT}
                    >
                      <IconButton
                        icon={TrashIcon}
                        intent="danger"
                        marginRight={majorScale(2)}
                        onClick={() => {
                          // handleDeleteChange(i);
                        }}
                      />
                    </Popover>
                  </Table.TextCell>
                </Table.Row>
              );
            })}
          </TableBody>
        </Table>
      </Dialog>
    </Pane>
  );
}

export default AddRoles;
