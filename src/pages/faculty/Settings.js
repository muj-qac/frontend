import {
  CaretRightIcon,
  Dialog,
  Button,
  Avatar,
  Pill,
  majorScale,
  TextInputField,
  toaster,
} from "evergreen-ui";
import { useState, useEffect } from "react";
import FacultySideBar from "../../components/FacultySidebar";
import TopBar from "../../components/TopBar";
import api from "../../api";

function Settings() {
  const [isShown, setIsShown] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const fetchKpi = async () => {
    const res = await api.get(`/user/my-profile`);
    setUser(res.data);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!oldPass || !newPass || !confirmPass) {
        toaster.warning("please fill all the entries");
      } else if (newPass !== confirmPass) {
        toaster.warning("password do not match");
      } else {
        const res = await api.put(`/user/change-password`, {
          oldPassword: oldPass,
          newPassword: newPass,
          confirmPassword: confirmPass,
        });
        console.log(res);
        if (res.status !== 200) throw "Request Failed";
        toaster.success("Password changed successfully!");
      }
    } catch (error) {
      toaster.danger("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
                <Button
                  marginRight={majorScale(2)}
                  onClick={() => setIsShown(true)}
                >
                  Change Password
                </Button>
                {/* <CaretRightIcon /> */}
                <Dialog
                  isShown={isShown}
                  title="No footer"
                  onCloseComplete={() => setIsShown(false)}
                  hasHeader={false}
                  isConfirmLoading={loading}
                  onConfirm={() => {
                    handleSubmit();
                  }}
                >
                  <TextInputField
                    // isInvalid={true}
                    paddingTop={24}
                    label="Old Password"
                    placeholder="Enter Old Password"
                    value={oldPass}
                    onChange={(e) => setOldPass(`${e.target.value}`)}
                    required
                    // validationMessage="This field is required"
                    type="password"
                  />
                  <TextInputField
                    // isInvalid={false}
                    label="New Password"
                    placeholder="Enter New Password"
                    value={newPass}
                    onChange={(e) => setNewPass(`${e.target.value}`)}
                    required
                    // validationMessage="This field is required"
                    type="password"
                  />
                  <TextInputField
                    label="Confirm Password"
                    placeholder="Enter Password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                    // validationMessage="This field is required"
                    type="password"
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
