import * as yup from "yup";

export const fields = {
  username: {
    name: "username",
    id: "username",
    type: "text",
    label: "",
    placeholder: "Enter your new username",
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
