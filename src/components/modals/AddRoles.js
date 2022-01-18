import React, { useRef } from 'react';
import {
  Pane,
  Dialog,
  TextInput,
  Table,
  Button,
  TableBody,
  TableRow,
  Badge,
  IconButton,
  TrashIcon,
  majorScale,
  AddIcon,
  Alert,
  InlineAlert,
  toaster,
} from 'evergreen-ui';
import { useState } from 'react';
function AddRoles({ setModalOpen2, modalOpen2 }) {
  const elementRef = useRef();
  const [list, setList] = useState([]);
  const handleAddChange = () => {
    let role = elementRef.current.value;
    console.log(elementRef.current.value);
    console.log(list);
    if (role && list.includes(role) === false) {
      setList([...list, elementRef.current.value]);
    }
    // else {
    //   return toaster.danger(
    //     'Something went wrong trying to create your audience'
    //   );
    // }
    else if (list.includes(role) === true) {
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
    const lis = [...list];
    lis.splice(index, 1);
    setList(lis);
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
            marginTop={4}
            marginLeft={4}
            ref={elementRef}
            // onChange={(e) => setRoles(e.target.value)}
          />
          {/* <Button marginBottom={3} onClick={handleAddChange}>
            Add Roles
          </Button> */}
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
              return (
                <Table.Row key={r} isSelectable>
                  <Table.TextCell>{r}</Table.TextCell>
                  <Table.TextCell>
                    <IconButton
                      icon={TrashIcon}
                      intent="danger"
                      marginRight={majorScale(2)}
                      onClick={() => {
                        handleDeleteChange(i);
                      }}
                    />
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
