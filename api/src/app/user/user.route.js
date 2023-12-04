const { SignUpController } = require("./user.controller");

const router = require("express").Router();



router.post("/auth/singup", SignUpController);

module.exports = router