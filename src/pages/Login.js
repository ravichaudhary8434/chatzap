import * as Yup from "yup";
import { Formik, Form } from "formik";
import Button from "../components/Reusable/Button";
import { TextInput, PasswordInput } from "../components/Reusable/FormInput";
import { useEffect } from "react";
import { toastError, toastSuccess } from "../utils/toast";
import { loginUser } from "../actions/auth";
import { compose } from "redux";
import { connect } from "react-redux";

const signUpValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});

const Login = ({ signInUser, isLoggedIn, error, loader }) => {
  const initialValues = () => {
    return {
      email: "",
      password: "",
    };
  };

  useEffect(() => {
    if (isLoggedIn) {
      toastSuccess("You've logged in successfully.");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (error) {
      toastError(error && error.data.message);
    }
  }, [error]);

  const onSubmit = (values) => {
    let data = {
      email: values.email,
      password: values.password,
    };

    signInUser(data);
  };

  return (
    <div className="nonauth">
      <div className="login__container">
        <Formik
          validationSchema={signUpValidation}
          initialValues={initialValues()}
          onSubmit={onSubmit}
        >
          {({ values }) => (
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

const mapStateToProps = (state) => ({
  authToken: state.auth.authToken,
  isLoggedIn: state.auth.isLoggedIn,
  error: state.auth.error,
  loader: state.auth.loader,
});

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(loginUser(data)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
