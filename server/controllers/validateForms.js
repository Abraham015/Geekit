const Yup = require("yup");

const formSchema = Yup.object({
    username: Yup.string().required("Usuario requerido"),
    password: Yup.string().required("Contraseña requerida"),
});

const validateForm = (req, res) => {
    const formData = req.body;
    formSchema.validate(formData).catch(e => {
        res.status(422).send();
        console.log(e.errors);
    }).then(valid => {
        if (valid) {
            console.log("form is good");
        }
    });
}

module.exports=validateForm;