// import SideBar from '../../components/SideBar';
import FacultyTable3 from "../../components/common/FacultyTable3";
import FacultySideBar from "../../components/FacultySidebar";
import TopBar from "../../components/TopBar";

function AllocatedKpi() {
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
          <FacultyTable3 />
        </div>
      </div>
    </div>
  );
}

export default AllocatedKpi;
