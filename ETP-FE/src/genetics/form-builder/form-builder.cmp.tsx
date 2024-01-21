/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form } from "../statics/form.json";
import { fieldBuilder } from "../statics/inputFormater";
import { Button } from "@mui/material";

// const formatedForm = JSON.parse(JSON.stringify(Form[0]));

function FormBuilder() {
  console.log(Form["Row 1"].map((asd) => console.log(asd))); // Display formatedForm

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "50%",
        height: "100%",
      }}
    >
      <h1>Form Builder</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {Object.keys(Form).map((row) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {Form[row].map((field: any) => (
              <div>{fieldBuilder(field)}</div>
            ))}
          </div>
        ))}
      </form>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default FormBuilder;
