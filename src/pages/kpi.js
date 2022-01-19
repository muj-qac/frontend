import { useState } from 'react';
import DataEntryModal from '../components/modals/DataEntryModal';
import SideBar from '../components/SideBar';
import TableKpi from '../components/TableKpi';
import TopBar from '../components/TopBar';

function Kpi() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" grid grid-cols-12">
        <div className=" col-start-1 col-span-2 justify-self-stretch">
          <SideBar />
        </div>
        <div className="col-start-3">
          <TopBar />
        </div>
        <div className=" w-10/12 self-center col-start-4 col-span-9 grid grid-cols-12 ">
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
