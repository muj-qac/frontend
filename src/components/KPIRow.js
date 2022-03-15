import React, { useEffect } from 'react';
import { Switch, Table } from 'evergreen-ui';
import { useState } from 'react';
import { SelectMenu, Button } from 'evergreen-ui';
import { Pane, Pill, Text } from 'evergreen-ui';
import api from '../api';
function KPIRow({ kpi }) {
  const [roles, setRoles] = useState([]);

  //useState for status toggler
  const [status, setStatus] = useState(kpi.kpi_allocation_status);
  //useState for dropdown
  const [selectedItemsState, setSelectedItems] = useState(
    !kpi?.kpi_allocation_allocated_to_roles
      ? []
      : kpi?.kpi_allocation_allocated_to_roles?.split(',')
  );
  const [selectedItemNamesState, setSelectedItemNames] = useState(null);
  //useState for roleSetter
  const [role, setRole] = useState();
  //UseState for displayArray
  const [array, setArray] = useState([]);
  //Disabling the toggler & chip component on clicking save button
  const [use, setUsed] = useState(true);
  const [chip, setChip] = useState(true);
  const [val, setVal] = useState(true);

  //!Roles do not render Get roles working do not erase this code
  const fetchRole = async () => {
    const res = await api.get(`/admin/role/get-roles`);
    setRoles(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchRole();
  }, []);
  useEffect(() => {
    const selectedItemsLength = selectedItemsState?.length;
    let selectedNames = '';
    if (selectedItemsLength === 0) {
      selectedNames = '';
    } else if (selectedItemsLength === 1) {
      selectedNames = selectedItemsState.toString();
    } else if (selectedItemsLength > 1) {
      selectedNames = selectedItemsLength.toString() + ' selected...';
    }
    setSelectedItemNames(selectedNames);
  }, [selectedItemsState]);
  // useEffect(() => {
  //   // console.log(selectedItemsState);
  //   setModalValues3({ ...modalValues3, role: selectedItemsState });
  // }, [selectedItemsState]);
  //function for displaying chips in roles header
  const displayArray = selectedItemsState?.map((chip) => {
    return (
      <Pill color="green" marginRight={8} marginBottom={5}>
        {chip}
      </Pill>
    );
  });
  //function for displayArray
  const handleClick = (e) => {
    if (e.target.innerHTML === 'Save') {
      setUsed(true);
      setChip(true);
      setVal(true);
      // console.log(selectedItemsState);
      // console.log(status);
      // console.log(kpi.id);
      if (!kpi.kpi_allocation_allocated_to_roles) {
        api.post(`/admin/kpi/allocate-roles`, {
          roles: selectedItemsState,
          status: status,
          kpiId: kpi.kpi_data_id,
        });
      } else {
        api.put(`/admin/kpi/allocate-roles/${kpi.kpi_data_id}`, {
          roles: selectedItemsState,
          status: status,
        });
        console.log(selectedItemsState, typeof selectedItemsState);
      }
      e.target.innerHTML = 'Edit';
    } else if (e.target.innerHTML === 'Edit') {
      setUsed(false);
      setChip(false);
      setVal(false);
      e.target.innerHTML = 'Save';
    }
  };
  return (
    <Pane>
      <Table.Row key={kpi.kpi_data_id} isSelectable>
        <Table.TextCell>
          {kpi.kpi_data_name}
          {/* <input type="hidden" name="kpiId" placeholder={kpi.id}/> */}
        </Table.TextCell>
        <Table.TextCell>
          <Switch
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            disabled={use}
          />
        </Table.TextCell>
        <Table.TextCell>
          <Pane className="grid grid-cols-3">{displayArray}</Pane>
        </Table.TextCell>
        <Table.TextCell>
          <SelectMenu
            isMultiSelect
            title="Select multiple names"
            options={roles?.map((role) => ({
              value: role.role_name,
              label: role.role_name,
            }))}
            selected={selectedItemsState}
            onSelect={(item) => {
              setSelectedItems([...selectedItemsState, item.value]);
            }}
            onDeselect={(item) => {
              const deselectedItemIndex = selectedItemsState.indexOf(
                item.value
              );
              const selectedItems = selectedItemsState.filter(
                (_item, i) => i !== deselectedItemIndex
              );

              setSelectedItems(selectedItems);
            }}
          >
            <Button disabled={val}>
              {selectedItemNamesState || 'Select roles...'}
            </Button>
          </SelectMenu>
        </Table.TextCell>
        <Table.TextCell>
          <Button appearance="primary" onClick={handleClick}>
            Edit
          </Button>
        </Table.TextCell>
      </Table.Row>
    </Pane>
  );
}

export default KPIRow;
