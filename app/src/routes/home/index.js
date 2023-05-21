"use strict";

const express = require("express"); // download module
const ctrl = require("./home.ctrl");
const router = express.Router();



router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;
