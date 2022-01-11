import React from "react";
import ReactDOM from "react-dom";
import { TagInput } from "evergreen-ui";

function Chip() {
  const [values, setValues] = React.useState(["IT", "CCE"]);
  return (
    <TagInput
      disabled
      tagProps={(value) => {
        return { color: "purple" };
      }}
      inputProps={{ placeholder: "Add roles..." }}
      values={values}
      onChange={(values) => {
        setValues(values);
      }}
    />
  );
}
export default Chip;
