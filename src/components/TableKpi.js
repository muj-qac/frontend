//import statements
// import RoleAllocModal from "./modals/RoleAllocModal";
// { CloseRoleAllocModal }
import { TextInput } from "evergreen-ui";
import { useState } from "react";
import { Switch } from "evergreen-ui";
import KPIRow from "./KPIRow";
const kpis = [
  {
    // index: 0,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 1,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 3,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 4,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 5,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 6,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 7,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 8,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 9,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 10,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 11,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 12,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 13,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 14,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 15,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 16,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },
  {
    // index: 17,
    title: "KPI 1",
    status: "Active",
    role: "Admin",
  },

  // More people...
];

function TableKpi() {
  //useState for disabling roles
  const [status, setStatus] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" h-96 shadow overflow-auto border-b border-gray-200 sm:rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
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
                {/* {kpis.map((kpi, index) => (
                  // <tr>
                  //   <td>
                  //     <KPIRow title={kpi.title} />
                  //   </td>
                  // </tr>
                  <tr key={kpi.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {kpi.title}
                      <div className="text-sm text-gray-500">
                        {kpi.department}
                      </div>
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
                      <div
                        className=""
                        key={index}
                        data-index={index}
                        className=""

                        // disabled={value}
                      >
                        <Chip />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          if (e.currentTarget.checked) {
                            setStatus(true);
                          } else {
                            setStatus(false);
                          }
                        }}
                      />
                    </td>
                  </tr>
                ))} */}
                {kpis.map((kpi) => (
                  <KPIRow kpi={kpi} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* {openRoleModal && (
        <RoleAllocModal CloseRoleAllocModal={setOpenRoleModal} />
      )} */}
    </div>
  );
}

export default TableKpi;
