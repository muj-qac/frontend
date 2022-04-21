import FacultySideBar from '../../components/Bars/FacultySidebar';
import TopBar from '../../components/Bars/TopBar';
import FacultyTableVerified from '../../components/Faculty/VerifiedKpi/FacultyTableVerified';

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
