import { Button, TextInput } from "evergreen-ui";
import { useState } from "react";
import { Switch } from "evergreen-ui";
import KPIRow2 from "./KPIRow2";
import SideBar from "./SideBar";
import UserModal from "./modals/UserModal";
const users = [
  {
    index: 0,
    firstname: "abc",
    lastname: "Gupta",
    email: "abc@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 1,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 3,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 4,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 5,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 6,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 7,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 8,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 9,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 10,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 11,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 12,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 13,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 14,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 15,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 16,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: " MTech - Information Security",
    school: "School of Computing and Information Technology",
  },
  {
    index: 17,
    firstname: "KPI 1",
    lastname: "Gupta",
    email: "fac1@gmail.com",
    role: "Admin",
    phone: 9935128975,
    faculty: "Professor",
    department: "Department of Computer Science and Engineering",
    program: "MTech - Information Security",
    school: "School of Computing and Information Technology",
  },

  // More people...
];
function KpiUser() {
  // //useState for disabling roles
  // const [status, setStatus] = useState(false);
  //Adding new user
  const [modalOpen, setModalOpen] = useState(false);
  //UseState
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <Button
            marginBottom={10}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Add User
          </Button>
          <Button iconAfter="refresh" marginBottom={10} marginLeft={4}>
            Refresh to Update data if not done
          </Button>
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
            <UserModal
              setModalOpen={setModalOpen}
              modalOpen={modalOpen}
              title="New User Information"
              user={users}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KpiUser;
