import React from 'react';
import KpiUser from '../components/Admin/ManageUsers/KpiUser';
import SideBar from '../components/Bars/SideBar';
import TopBar from '../components/Bars/TopBar';
function User() {
  return (
    <>
      <div className=" grid grid-cols-12">
        <div className=" col-start-1 col-span-2 justify-self-stretch">
          <SideBar />
        </div>
        {/* <div className=" col-start-7 h-10">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
        </button>
      </div> */}
        <div className="col-start-3">
          <TopBar />
        </div>
        <div className=" w-10/12 self-center col-start-4 col-span-9 grid grid-cols-12 ">
          {/* <button
            className=" mb-4 self-center col-end-13 h-10 rounded-full bg-transparent border-2 border-Light-text_secondary text-Light-text_secondary  hover:border-Light-text_primary hover:text-Light-text_primary font-semibold hover:scale-105 ease-in-out duration-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            SignOut
          </button> */}
          <div className="col-span-12">
            <KpiUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
