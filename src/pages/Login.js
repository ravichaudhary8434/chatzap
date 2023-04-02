import * as Yup from "yup";
import { Formik, Form } from "formik";
import Button from "../components/Reusable/Button";
import { TextInput, PasswordInput } from "../components/Reusable/FormInput";
import { loginUser } from "../lib/api";
import { useState } from "react";
import { toastError, toastSuccess } from "../utils/toast";

const signUpValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});

const Login = () => {
  const [loader, setLoader] = useState(false);

  const initialValues = () => {
    return {
      email: "",
      password: "",
    };
  };

  const onSubmit = (values) => {
    setLoader(true);
    let data = {
      email: values.email,
      password: values.password,
    };

    loginUser(data)
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
    <div className="nonauth">
      <div className="login__container">
        <Formik
          validationSchema={signUpValidation}
          initialValues={initialValues()}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
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

              <Button
                type="submit"
                primaryBlue
                width="100%"
                height="48px"
                disabled={loader}
              >
                {loader ? "Loading..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
