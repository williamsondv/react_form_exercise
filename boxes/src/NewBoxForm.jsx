import { v4 as uuid } from "uuid";
import "./NewBoxForm.css";

import React from "react";
import { Formik, useFormik } from "formik";

const NewBoxForm = ({ createBox }) => {
  const formik = useFormik({
    initialValues: {
      backgroundColor: "",
      color: "",
      height: "",
      width: "",
    },
    onSubmit: (values) => {
      createBox({ ...values, id: uuid() });
    },
  });

  return (
    <div>
      <form id="boxForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="backgroundColor">Background Color: </label>
        <input
          type="text"
          name="backgroundColor"
          id="backgroundColor"
          value={formik.values.backgroundColor}
          onChange={formik.handleChange}
        />

        <label htmlFor="color">Text Color: </label>
        <input
          type="text"
          name="color"
          id="color"
          value={formik.values.color}
          onChange={formik.handleChange}
        />

        <label htmlFor="width">Width: </label>
        <input
          type="text"
          name="width"
          id="width"
          value={formik.values.width}
          onChange={formik.handleChange}
        />

        <label htmlFor="height">Height: </label>
        <input
          type="text"
          name="height"
          id="height"
          value={formik.values.height}
          onChange={formik.handleChange}
        />

        <div className="buttonHolder">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewBoxForm;
