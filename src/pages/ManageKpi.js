import SideBar from '../components/Bars/SideBar';
import TopBar from '../components/Bars/TopBar';
import VerificationTable from '../components/Admin/VerifyKpi/VerificationTable';

function ManageKpi() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className=" col-start-1 ">
          <SideBar />
        </div>
        <div className="col-start-3">
          <TopBar />
        </div>
        <div className=" col-span-8 self-center ">
          <VerificationTable />
        </div>
      </div>
    </div>
  );
}

export default ManageKpi;
