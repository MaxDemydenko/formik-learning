import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Synchronous validation function
/*const validate = values => {
   let errorMessage;
   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errorMessage = 'Invalid email address';
   }

   return errorMessage;
 };*/

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required")
});

// Async validation function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validateAsync = (value) => {
  return sleep(2000).then(() => {
    if (["admin", "null", "god"].includes(value)) {
      return "Nice try";
    }
  });
};

// example usage
export const MyForm = () => (
  <Formik
    validationSchema={ValidationSchema}
    initialValues={{ email: "", username: "" }}
    onSubmit={(values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="email" type="email" />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <Field name="password" type="password" />

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);
