const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "backend en express funcionando correctamente" });
});

module.exports = router;
