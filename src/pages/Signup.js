import * as Yup from "yup";
import { Formik, Form } from "formik";
import Button from "../components/Reusable/Button";
import { TextInput, PasswordInput } from "../components/Reusable/FormInput";
import { registerUser } from "../lib/api";
import { useState } from "react";
import { toastError, toastSuccess } from "../utils/toast";

const signUpValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  fullName: Yup.string().required("Full Name is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const [loader, setLoader] = useState(false);

  const initialValues = () => {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  };

  const onSubmit = (values) => {
    setLoader(true);
    let data = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    };

    registerUser(data)
      .then((res) => {
        toastSuccess(res && res.data.message);
      })
      .catch((err) => {
        toastError(err && err.response && err.response.data.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <Formik
          validationSchema={signUpValidation}
          initialValues={initialValues()}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <TextInput
                value={values.fullName}
                name="fullName"
                label="Full Name"
                placeholder="Enter full name"
              />
              <TextInput
                value={values.email}
                name="email"
                label="Email Address"
                placeholder="Enter email address"
              />

              <PasswordInput
                value={values.password}
                name="password"
                label="Password"
                placeholder="Enter password"
              />

              <PasswordInput
                value={values.confirmPassword}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter confirm password"
              />

              <Button
                type="submit"
                primaryBlue
                width="100%"
                height="48px"
                disabled={loader}
              >
                {loader ? "Loading..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
