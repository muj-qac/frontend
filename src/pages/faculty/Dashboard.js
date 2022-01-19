// import SideBar from '../../components/SideBar';
import FacultyTable from '../../components/common/FacultyTable';
import FacultySideBar from '../../components/FacultySidebar';
import TopBar from '../../components/TopBar';

function Dashboard() {
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
          <FacultyTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
