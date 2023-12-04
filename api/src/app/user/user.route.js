const router = require("express").Router();



router.get("/user", (req, res, next) => {
    try {
        res.status(201).json('asfds');
    } catch (e) {
        next(e);
    }
});

module.exports = router