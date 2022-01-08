import SideBar from '../components/SideBar';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreateKpi() {
  const validationSchema = Yup.object({
    kpi: Yup.string().required('Please select a Column Name'),
    name: Yup.string().required('Please select a Column Name'),
  });

  const initialValues = {
    name: '',
    dataType: '',
    invalidAction: '',
    rule: '',
    invalidHelpText: '',
  };

  const onSubmit = (values) => {};

  return (
    <div className=" grid grid-cols-12">
      <div className=" col-start-1 col-span-2 justify-self-stretch">
        <SideBar />
      </div>
      <div className=" w-10/12 self-center col-start-4 col-span-9 grid grid-cols-12 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log()}
        >
          <Form>
            <div className=" ">
              <label htmlFor="name" className=" m-auto">
                Name
              </label>
              <input
                className="px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full "
                id="tableName"
                name="tableName"
                placeholder="Enter Name"
                //   ref={tableName}
              />
              <button className=" bg-Dark-primary hover:bg-Dark-secondary text-Dark-text_primary font-bold w-1/3 ml-2 rounded-full">
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreateKpi;
