import SideBar from '../components/SideBar';
import TableKpi from '../components/TableKpi';
import TopBar from '../components/TopBar';

function Kpi() {
  return (
    <>
      <div className=" grid grid-cols-12 grid-flow-col">
        <div className=" col-start-1 col-span-2 justify-self-stretch">
          <SideBar />
        </div>
        <div className="col-start-3 ">
          <TopBar />
        </div>
        <div className=" w-10/12 self-center col-start-4 col-span-9">
          <TableKpi />
        </div>
      </div>
    </>
  );
}

export default Kpi;
