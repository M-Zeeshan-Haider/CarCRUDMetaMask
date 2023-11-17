const Yup = require("yup");

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .email("Invalid email address.")
    .strict(true)
    .trim()
    .nullable(false),

  password: Yup.string()
    .required("Password is required.")
    .strict(true)
    .trim()
    .nullable(false),
});

module.exports = signInSchema;

