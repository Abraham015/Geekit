const express = require("express");
const validateForm = require("../controllers/validateForms");
const router = express.Router();
const Yup = require("yup");

const formSchema = Yup.object({
    username: Yup.string().required("¡Nombre de usuario requerido!"),
    password: Yup.string().required("¡Contraseña requerida!").min(5, "Contraseña corta").max(15, "Contraseña demasiado larga"),
});

router.post("/inicio", (req, res) => {
    validateForm(req, res);
});

router.post("/registro", async(req, res) => {
    validateForm(req, res);
});

module.exports = router;