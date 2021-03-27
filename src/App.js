import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      alert(values.email + "  |  " + values.password);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required field"),
      password: Yup.string()
        .min(3, "Enter stronger password")
        .required("Required field")
    })
  });

  return (
    <div>
      <h1>Test Formik Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
