const {Router} = require("express");

const router = Router();

router.get("/foros/", (req, res) => {
    res.send("Hello from foros");
});

module.exports = router;