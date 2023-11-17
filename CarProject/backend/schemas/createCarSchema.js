const Yup = require("yup");


const createCarSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    color: Yup.string().required("Color is required"),
    modal: Yup.string().required("Modal is required"),
    registrationNo: Yup.string().required("RegistrationNo is required"),
    imageUrl: Yup.string().required("Image is required"),
});

module.exports = createCarSchema;