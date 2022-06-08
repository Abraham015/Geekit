const express = require("express");
const validateForm = require("../controllers/validateForms");
const router = express.Router();
const pool = require("../database");

router.post("/inicio", (req, res) => {
    validateForm(req, res);
});

router.post("/registro", async(req, res) => {
    validateForm(req, res);
});

module.exports = router;