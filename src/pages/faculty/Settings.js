import {
  CaretRightIcon,
  Dialog,
  IconButton,
  Avatar,
  Pill,
  majorScale,
  TextInputField,
} from "evergreen-ui";
import { useState } from "react";
import FacultySideBar from "../../components/FacultySidebar";
import TopBar from "../../components/TopBar";

function Settings({ user }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center mb-10">
        <Avatar name={user.first_name} size={150} marginRight={16} />
        <h1 className="text-xl font-semibold pb-8">
          {user.first_name} Information
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="mb-5">
          <h3 className="font-semibold">First Name</h3>
          <span>{user.first_name}</span>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Last Name</h3>
          <span>{user.last_name}</span>
        </div>
        <div>
          <h3 className="font-semibold">Email</h3>
          <span>{user.email}</span>
        </div>
        <div>
          <h3 className="font-semibold">Phone</h3>
          <span>{user.phoneNumber}</span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Roles</h3>

          <span className="ml-0">
            {user.role.map((val) => (
              <Pill color="green" marginLeft={6} marginBottom={10} width={50}>
                {val}
              </Pill>
            ))}
          </span>
        </div>
      </div>

      <br />
      <hr />
      <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
      <div className="grid grid-cols-2">
        <div className="mr-10 mb-8">
          <h3 className="font-semibold">Department</h3>

          <span>{user.details.department}</span>
        </div>
        <div>
          <h3 className="font-semibold">Faculty</h3>
          <span>{user.details.faculty}</span>
        </div>
        <div className="mr-10">
          <h3 className="font-semibold">School</h3>
          <span>{user.details.school}</span>
        </div>
        <div>
          <h3 className="font-semibold">Program</h3>
          <span>{user.details.program}</span>
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" col-start-1 ">
          <FacultySideBar />
        </div>
        <div className="col-start-3">
          <TopBar />
        </div>
        <div className=" w-10/12 self-center col-start-4 col-span-9">
          <div className=" inline w-10 ">
            <IconButton
              icon={CaretRightIcon}
              marginRight={majorScale(2)}
              onClick={() => setIsShown(true)}
            />
            {/* <CaretRightIcon /> */}
            <span>Change Password</span>
            <Dialog
              isShown={isShown}
              title="No footer"
              onCloseComplete={() => setIsShown(false)}
              hasHeader={false}
            >
              <TextInputField
                paddingTop={24}
                label="Old Password"
                placeholder="Enter Old Password"
              />
              <TextInputField
                label="New Password"
                placeholder="Enter New Password"
              />
              <TextInputField
                label="Confirm Password"
                placeholder="Enter Password"
              />
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
