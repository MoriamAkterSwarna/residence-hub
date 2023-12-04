const { SingUpService, SingInService } = require("./user.services");

const SignUpController = async (req, res, next) => {
    try {
        const body = req.body;
        const response = await SingUpService(body)
        res.status(201).json(response)
    } catch (e) {
        next(e);
    }
}

const SignInController = async (req, res, next) => {
    try {
        const body = req.body;
        const response = await SingInService(body);
        res.status(200).json(response)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    SignUpController,
    SignInController
}