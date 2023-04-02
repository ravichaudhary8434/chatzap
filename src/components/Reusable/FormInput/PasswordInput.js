import { Field, ErrorMessage } from "formik";

const PasswordInput = ({ name, value, placeholder, label }) => {
  return (
    <div className="form__field">
      <label>{label || ""}</label>
      <Field
        name={name}
        value={value || ""}
        placeholder={placeholder || ""}
        type="password"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="form__field__error"
      />
    </div>
  );
};

export default PasswordInput;
