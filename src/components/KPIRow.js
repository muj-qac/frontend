import React from 'react';
import { Switch } from 'evergreen-ui';
import { useState } from 'react';
import { SelectMenu, Button } from 'evergreen-ui';
import { Pane, Pill, Text } from 'evergreen-ui';
function KPIRow({ kpi }) {
  const profile = ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber'];
  const [options] = React.useState(
    profile.map((label) => ({
      label,
      value: label,
    }))
  );
  //useState for status toggler
  const [checked, setChecked] = useState(true);
  //useState for dropdown
  const [selectedItemsState, setSelectedItems] = React.useState([]);
  const [selectedItemNamesState, setSelectedItemNames] = React.useState(null);
  //useState for roleSetter
  const [role, setRole] = useState();
  //UseState for displayArray
  const [array, setArray] = useState([]);
  //Disabling the toggler & chip component on clicking save button
  const [use, setUsed] = useState(false);
  const [chip, setChip] = useState(false);
  const [val, setVal] = useState(false);
  //function for displaying chips in roles header
  const displayArray = selectedItemsState.map((chip) => {
    return (
      <Pill color="green" marginRight={8} marginBottom={5}>
        {chip}
      </Pill>
    );
  });
  //function for displayArray
  const handleClick = (e) => {
    if (e.target.innerHTML == 'Save') {
      setUsed(true);
      setChip(true);
      setVal(true);
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
      <tr key={kpi.email}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{kpi.title}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
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
            options={options}
            selected={selectedItemsState}
            onSelect={(item) => {
              const selected = [...selectedItemsState, item.value];
              const selectedItems = selected;
              const selectedItemsLength = selectedItems.length;
              let selectedNames = '';
              if (selectedItemsLength === 0) {
                selectedNames = '';
              } else if (selectedItemsLength === 1) {
                selectedNames = selectedItems.toString();
              } else if (selectedItemsLength > 1) {
                selectedNames = selectedItemsLength.toString() + ' selected...';
              }
              setSelectedItems(selectedItems);
              setSelectedItemNames(selectedNames);
            }}
            onDeselect={(item) => {
              const deselectedItemIndex = selectedItemsState.indexOf(
                item.value
              );
              const selectedItems = selectedItemsState.filter(
                (_item, i) => i !== deselectedItemIndex
              );
              const selectedItemsLength = selectedItems.length;
              let selectedNames = '';
              if (selectedItemsLength === 0) {
                selectedNames = '';
              } else if (selectedItemsLength === 1) {
                selectedNames = selectedItems.toString();
              } else if (selectedItemsLength > 1) {
                selectedNames = selectedItemsLength.toString() + ' selected...';
              }
              setSelectedItems(selectedItems);
              setSelectedItemNames(selectedNames);
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
