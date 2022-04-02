import { useState } from 'react';
import DataEntryModal from '../components/ManageKpi/DataEntryModal';
import SideBar from '../components/Bars/SideBar';
import TableKpi from '../components/ManageKpi/TableKpi';
import TopBar from '../components/Bars/TopBar';

function Kpi() {
  const [showModal, setShowModal] = useState(false);
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
            <TableKpi />
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <DataEntryModal />
          <div className=" w-40 h-40   justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none translate-x-[75rem] translate-y-[18rem] ">
            <button
              className="inline-flex items-center justify-center w-10 h-10 mr-2 text-Light-text_secondary transition-colors duration-150 bg-Light-primary rounded-full border-2 border-Light-text_secondary text-Light-text_secondary  hover:border-Light-text_primary focus:shadow-outline hover:bg-white hover:scale-105 ease-in-out duration-300"
              // className=" px-5 m-0 self-center col-end-13 h-10 rounded-full bg-Light-primary border-2 border-Light-text_secondary text-Light-text_secondary  hover:border-Light-text_primary hover:text-Light-text_primary font-semibold hover:scale-105 ease-in-out duration-300  "
              type="button"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Kpi;
