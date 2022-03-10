// import SideBar from '../../components/SideBar';
import FacultyTableVerified from "../../components/common/FacultyTableVerified";
import FacultySideBar from "../../components/FacultySidebar";
import TopBar from "../../components/TopBar";

function VerifiedKpi() {
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
          <FacultyTableVerified />
        </div>
      </div>
    </div>
  );
}

export default VerifiedKpi;
