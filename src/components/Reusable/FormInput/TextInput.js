import { Field, ErrorMessage } from "formik";

const TextInput = ({ name, value, placeholder, label }) => {
  return (
    <div className="form__field">
      <label>{label}</label>
      <Field
        type="text"
        name={name}
        value={value || ""}
        placeholder={placeholder || ""}
      />
      <ErrorMessage
        component="div"
        className="form__field__error"
        name={name}
      />
    </div>
  );
};

export default TextInput;
