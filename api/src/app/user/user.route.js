const { signUp, signIn, getSingleUser, updatePassword, getAllUser } = require("./user.controller");

const router = require("express").Router();



router.post("/auth/signup", signUp);
router.post("/auth/signin", signIn);

router.get('/user/:id', getSingleUser)
router.patch('/user/password', updatePassword)
router.get('/user', getAllUser)
module.exports = router