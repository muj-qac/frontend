import { useState } from "react";
// import Table from './Table';

function KpiCol() {
  const [inputList, setInputList] = useState([
    { name: "", dataType: "string", nullable: "false" },
  ]);
  const [object, setObject] = useState([{ tableName: "" }]);
  const [final, setFinal] = useState();
  //   const tableName = useRef(null);
  //   const [final, setFinal] = useState([{ tableName: '', columns: '' }]);
  //   if (showModal === 'false') {
  const createKpi = () => {
    let resultItem = { columns: inputList };
    let result = { ...object[0], ...resultItem };

    // result.push(object[0]);
    // result.push(resultItem);
    console.log(result);
    setFinal(result);
  };
  // }

  const handleInputName = (e) => {
    const { name, value } = e.target;
    // const myObj = JSON.parse(object);
    const list = [...object];
    list[0][name] = value;
    setObject(list);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value, checked } = e.target;
    const list = [...inputList];
    // name === 'nullable'
    //   ? (list[index][name] = checked)
    //   : (list[index][name] = value);
    list[index][name] = value;
    console.log(checked);
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { name: "", dataType: "string", nullable: "false" },
    ]);
  };
  return (
    <div className=" max-h-[35rem] overflow-y-auto">
      <div className=" grid grid-cols-3  mb-5 mt-3 place-content-center">
        <label htmlFor="name" className=" m-auto">
          Name
        </label>
        <input
          className="px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full "
          id="tableName"
          name="tableName"
          placeholder="Enter Name"
          value={object.tableName}
          //   ref={tableName}
          onChange={(e) => handleInputName(e)}
        />
        <button
          className=" bg-Dark-primary hover:bg-Dark-secondary text-Dark-text_primary font-bold w-1/3 ml-2 rounded-full"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      {inputList.map((x, i) => {
        return (
          <>
            {/* <div className="grid grid-cols-2 w-2/3 mb-5 mt-3 place-content-center">
              <label htmlFor="name" className=" m-auto">
                Name
              </label>
              <input
                className="px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full "
                id="tableName"
                name="tableName"
                placeholder="Enter Name"
                value={x.tableName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div> */}
            <div className=" grid grid-cols-6 gap-4 my-1 mx-auto ">
              <div className="col-span-2">
                <input
                  className=" ml-2 col-span-3 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full "
                  name="name"
                  placeholder="Enter Column Name"
                  value={x.name}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
              <div className=" col-span-6 ">
                <label for="dataType" className="mx-4">
                  DataType:
                  <select
                    name="dataType"
                    id="dataType"
                    className=" bg-gray-100 mx-4"
                    onClick={(e) => handleInputChange(e, i)}
                  >
                    <option value="string">String</option>
                    <option value="integer">Integer</option>
                    <option value="char">Char</option>
                    <option value="boolean">Boolean</option>
                  </select>
                </label>
                <label for="nullable" className="mx-2">
                  Null:
                  <select
                    name="nullable"
                    id="nullable"
                    className=" bg-gray-100 mx-3"
                    onClick={(e) => handleInputChange(e, i)}
                  >
                    <option value="false">false</option>
                    <option value="true">True</option>
                  </select>
                </label>
                {inputList.length !== 1 && (
                  <button
                    className="bg-Dark-primary hover:bg-Dark-secondary text-Dark-text_primary font-bold w-1/4 py-1 ml-2 rounded-full"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </>
        );
      })}
      <button
        className=" bg-Dark-secondary hover:bg-Dark-primary text-white font-bold py-1 px-4 rounded-full"
        onClick={() => createKpi()}
      >
        final json
      </button>
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <div style={{ marginTop: 20 }}>{JSON.stringify(object)}</div>
      <div style={{ marginTop: 20 }}>{JSON.stringify(final)}</div>
    </div>
  );
}

export default KpiCol;
