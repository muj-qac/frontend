import {
  CaretRightIcon,
  Dialog,
  IconButton,
  Avatar,
  Pill,
  majorScale,
  TextInputField,
} from "evergreen-ui";
import { useState, useEffect } from "react";
import FacultySideBar from "../../components/FacultySidebar";
import TopBar from "../../components/TopBar";
import api from "../../api";

function Settings() {
  const [isShown, setIsShown] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchKpi = async () => {
    const res = await api.get(`/user/my-profile`);
    setUser(res.data);
    setLoading(true);
    // console.log(res.data);
  };
  console.log(user);
  useEffect(() => {
    fetchKpi();
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-12 font-inter">
        <div className=" col-start-1 ">
          <FacultySideBar />
        </div>
        <div className="col-start-3">
          <TopBar />
        </div>
        <div className=" w-10/12 self-center col-start-4 col-span-9">
          {/* <div className="grid grid-cols-1 justify-items-center">
            <Avatar
              name={user[0]?.first_name}
              size={150}
              marginRight={16}
              marginBottom={10}
            />
            <h1 className="text-xl font-semibold pb-8 pr-8">
              {user[0]?.first_name} {user[0]?.last_name}
            </h1>
          </div> */}
          <div className="grid grid-cols-2 mx-24 mt-8 ml-40">
            <div className="mb-5">
              <h3 className="font-semibold">First Name</h3>
              <span>{user[0]?.first_name}</span>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold">Last Name</h3>
              <span>{user[0]?.last_name}</span>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <span>{user[0]?.email}</span>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <span>{user[0]?.phoneNumber}</span>
            </div>
            <div className="w-full">
              <br />
              <hr />
              <h1 className="text-xl font-semibold pb-8 mt-2">Other Details</h1>
              <div className="mb-8">
                <div className="mb-4">
                  <h3 className="font-semibold">Department</h3>

                  <span>{user[0]?.details?.department}</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold">Faculty</h3>
                  <span>{user[0]?.details?.faculty}</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold">School</h3>
                  <span>{user[0]?.details?.school}</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold">Program</h3>
                  <span>{user[0]?.details?.program}</span>
                </div>
              </div>
              <div className="">
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
        {/* <div className=" w-10/12 self-center col-start-4 col-span-9">
          <div className=" inline w-10 "></div>
        </div> */}
      </div>
    </div>
  );
}

export default Settings;
