const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server yüklendi ve çalışıyor." }).status(200);
});

module.exports = router;