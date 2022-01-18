import { Button, TextInput, IconButton, RefreshIcon } from "evergreen-ui";
import { useState } from "react";
import { Switch } from "evergreen-ui";
import KPIRow2 from "./KPIRow2";
import SideBar from "./SideBar";
import UserModal from "./modals/UserModal";
import AddRoles from "./modals/AddRoles";
import AddUserModal from "./modals/AddUserModal";
const users = [
  {
    index: 0,
    firstName: "abc",
    lastName: "Gupta",
    email: "abc@gmail.com",
    role: ["IT", "CSE", "ECE"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 1,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 3,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 4,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 5,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 6,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 7,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 8,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 9,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 10,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 11,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 12,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 13,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 14,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 15,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 16,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["IT", "CSE"],
    pass: "",
    cnfrmpass: "",
    phoneNumber: 9935128975,
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },
  {
    index: 17,
    firstName: "KPI 1",
    lastName: "Gupta",
    email: "fac1@gmail.com",
    role: ["Admin"],
    phoneNumber: 9935128975,
    pass: "",
    cnfrmpass: "",
    details: {
      faculty: "Professor",
      department: "Department of Computer Science and Engineering",
      program: " MTech - Information Security",
      school: "School of Computing and Information Technology",
    },
  },

  // More people...
];
function KpiUser() {
  // //useState for disabling roles
  // const [status, setStatus] = useState(false);
  //Adding new user
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  //UseState
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <Button
            marginBottom={10}
            onClick={() => {
              setModalOpen3(true);
            }}
          >
            Add User
          </Button>
          <Button
            marginBottom={10}
            marginLeft={4}
            onClick={() => {
              setModalOpen2(true);
            }}
          >
            Add/Delete Roles
          </Button>
          <IconButton
            icon={RefreshIcon}
            marginBottom={10}
            marginLeft={4}
            className=" float-right"
          />
          <div className=" h-96 shadow overflow-auto border-b border-gray-200 sm:rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    email
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
                {users.map((user) => (
                  <KPIRow2 user={user} />
                ))}
              </tbody>
            </table>
            <AddUserModal
              setModalOpen3={setModalOpen3}
              modalOpen={modalOpen3}
            />
            <AddRoles setModalOpen2={setModalOpen2} modalOpen2={modalOpen2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KpiUser;
