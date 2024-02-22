const express = require("express");
const router = express.Router();
const cors = require("cors");

const { test } = require("../controller/newsController");

router.get("/test", test);

module.exports = router;
