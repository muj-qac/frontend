import SideBar from "../components/SideBar";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ColumnTable from "../components/CreateKpi/ColumnTable";
import { Pane, Heading } from "evergreen-ui";
import TopBar from "../components/TopBar";

function CreateKpi() {
  const validationSchema = Yup.object({
    kpi: Yup.string().required("Please select a Column Name"),
    name: Yup.string().required("Please select a Column Name"),
  });

  const initialValues = {
    name: "",
    dataType: "",
    invalidAction: "",
    rule: "",
    invalidHelpText: "",
  };

  const onSubmit = (values) => {};

  return (
    <div className=" grid grid-cols-12">
      <div className=" col-start-1 col-span-2 justify-self-stretch">
        <SideBar />
      </div>
      <div className="col-start-3">
        <TopBar />
      </div>
      <div className=" col-span-8 self-center ">
        <Heading size={600} margin={50} marginLeft={0}>
          Create KPI
        </Heading>
        <Pane backgroundColor="white">
          <ColumnTable />
        </Pane>
      </div>
    </div>
  );
}

export default CreateKpi;
