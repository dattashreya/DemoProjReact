import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  password: '',
};
const onSubmit = (values) => {
  console.log('form values:', values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  } 
  return errors;
};
let inlineStyle = {
  color: 'red',
};
export default function ExistingRegUser() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log('errors:', formik.errors);

  return (
    <div>
      <form className="formHeading" onSubmit={formik.handleSubmit}>
        <h2 className="classHeading">Existing User</h2>
        <label htmlFor="name">User ID / Email:</label>
        <input
          type="text"
          placeholder="enter your name"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div style={inlineStyle}>{formik.errors.name}</div>
        ) : null}
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="enter your password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={inlineStyle}>{formik.errors.password}</div>
        ) : null}
        <br /><br />
        
        <button className="center" type="submit">Button</button>
      </form>
    </div>
  );
}
