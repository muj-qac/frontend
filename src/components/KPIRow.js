import React from "react";
import { Switch } from "evergreen-ui";
import { useState } from "react";
import Chip from "./Chip";
function KPIRow(kpi) {
  //useState for status toggler
  const [checked, setChecked] = useState(true);
  console.log(kpi.title);
  return (
    <>
      <tr key={kpi.email}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">KPI 1</div>
          <div className="text-sm text-gray-500">{kpi.department}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Chip />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button className="rounded-md w-12 text-white  bg-blue p-1 ml-24">
            Save
          </button>
        </td>
      </tr>
    </>
    // <div className="grid grid-cols-5 p-3 items-center rounded-md pl-10 disabled:{true}">
    //   <Switch
    //     disabled
    //     checked={checked}
    //     onChange={(e) => setChecked(e.target.checked)}
    //   />
    //   <Chip />
    //   <button className="rounded-md w-12 text-white  bg-blue p-1 ml-24">
    //     Save
    //   </button>
    // </div>
  );
}

export default KPIRow;
