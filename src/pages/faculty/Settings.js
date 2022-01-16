import {
  CaretRightIcon,
  Dialog,
  IconButton,
  majorScale,
  TextInputField,
} from 'evergreen-ui';
import { useState } from 'react';
import FacultySideBar from '../../components/FacultySidebar';
import TopBar from '../../components/TopBar';

function Settings() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
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
