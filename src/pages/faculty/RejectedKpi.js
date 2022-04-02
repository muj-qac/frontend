import FacultySideBar from '../../components/Bars/FacultySidebar';
import TopBar from '../../components/Bars/TopBar';
import FacultyTableRejected from '../../components/Faculty/RejectedKpi/FacultyTableRejected';

function RejectedKpi() {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className=" col-start-1 ">
          <FacultySideBar />
        </div>
        <div className="col-start-3">
          <TopBar />
        </div>
        <div className=" col-span-8 self-center ">
          <FacultyTableRejected />
        </div>
      </div>
    </div>
  );
}

export default RejectedKpi;
