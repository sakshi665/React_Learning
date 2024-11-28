 import { Formik, ErrorMessage, Field } from "formik";
import { object, string } from "yup";

function Advanceform2() {
 const validationSchema = object({
   name: string().required("Name is required"),
   email: string().email("invalid email address").required("Email is required"),
 });

 const handleSubmit = (values) => {
   console.log("Form data: ", values);
 };

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" placeholder="Enter full name"></Field>
          <ErrorMessage name></ErrorMessage>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" placeholder="Enter email"></Field>
          <ErrorMessage></ErrorMessage>
        </div>

        <button>Submit</button>
      </form>
    </Formik>
  );
}

export default Advanceform2