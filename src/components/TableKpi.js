const kpis = [
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },
  {
    title: 'KPI 1',
    status: 'Active',
    role: 'Admin',
  },

  // More people...
];

function TableKpi() {
  return (
    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                {kpis.map((kpi) => (
                  <tr key={kpi.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{kpi.title}</div>
                      <div className="text-sm text-gray-500">
                        {kpi.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {kpi.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {kpi.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableKpi;
