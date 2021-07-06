import * as yup from "yup";

export const fields = {
  email: {
    name: "email",
    id: "email",
    type: "email",
    label: "",
    placeholder: "Enter your email...",
    defaultValue: "",
    errorMessage: "Required field",
    validation: yup.string().required().email(),
    autocomplete: false,
    "allow-1password": "no",
  },
  password: {
    name: "password",
    id: "password",
    type: "password",
    label: "",
    placeholder: "Enter your password...",
    defaultValue: "",
    errorMessage: "Required field",
    validation: yup.string().required(),
    autocomplete: false,
    "allow-1password": "no",
  },
};

const schemaShape = Object.keys(fields).reduce((result, key) => {
  result[key] = fields[key].validation;
  return result;
}, {});

export const schema = yup.object().shape(schemaShape);

const FormSchema = {
  schema,
  fields,
};

export default FormSchema;
