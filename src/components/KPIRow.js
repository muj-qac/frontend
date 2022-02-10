import React, { useEffect } from 'react';
import { Switch } from 'evergreen-ui';
import { useState } from 'react';
import { SelectMenu, Button } from 'evergreen-ui';
import { Pane, Pill, Text } from 'evergreen-ui';
import api from '../api';
function KPIRow({ kpi }) {
  const [roles, setRoles] = useState([]);

  //useState for status toggler
  const [status, setStatus] = useState(true);
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
  const [use, setUsed] = useState(false);
  const [chip, setChip] = useState(false);
  const [val, setVal] = useState(false);

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
          status,
          kpiId: kpi.kpi_data_id,
        });
      } else {
        api.put(
          `/admin/kpi/allocate-roles/${kpi.kpi_data_id}`,
          selectedItemsState
        );
      }
      e.target.innerHTML = 'Edit';
    } else {
      setUsed(false);
      setChip(false);
      setVal(false);
      e.target.innerHTML = 'Save';
    }
  };
  return (
    <>
      <tr key={kpi.kpi_data_id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{kpi.kpi_data_name}</div>
          {/* <input type="hidden" name="kpiId" placeholder={kpi.id}/> */}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
            <Switch
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
              disabled={use}
            />
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Pane className="grid grid-cols-3">{displayArray}</Pane>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
          <button
            className="rounded-md w-12 text-white  bg-blue p-1 ml-24"
            onClick={handleClick}
          >
            Save
          </button>
        </td>
      </tr>
    </>
  );
}

export default KPIRow;
