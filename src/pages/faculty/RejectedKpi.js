// import SideBar from '../../components/SideBar';
import FacultyTableRejected from '../../components/common/FacultyTableRejected';
// import FacultyTable4 from '../../components/common/FacultyTableRejected';
import FacultySideBar from '../../components/FacultySidebar';
import TopBar from '../../components/TopBar';

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
