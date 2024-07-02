import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};
const onSubmit = (values) => {
  console.log('form values:', values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/i.test(values.email)) {
    errors.email = 'Invalid format';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
};
let inlineStyle = {
  color: 'red',
};
export default function NewRegForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log('errors:', formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h4>Didn't have an account? Sign up here</h4>
        <label htmlFor="name">Name:</label>
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
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="enter your email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={inlineStyle}>{formik.errors.email}</div>
        ) : null}
        <br />
        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          placeholder="enter your channel"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {formik.errors.channel ? (
          <div style={inlineStyle}>{formik.errors.channel}</div>
        ) : null}
        <br />
        <button type="submit">Button</button>
      </form>
    </div>
  );
}
