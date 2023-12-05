const { SignUpController, SignInController } = require("./user.controller");

const router = require("express").Router();



router.post("/auth/signup", SignUpController);
router.post("/auth/signin", SignInController);

module.exports = router