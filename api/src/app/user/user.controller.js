const { singUpDB, singInDB, getSingleUserDB, updatePasswordDB, getAllUserDB } = require("./user.services");

const signUp = async (req, res, next) => {
    try {
        const body = req.body;
        const response = await singUpDB(body)
        res.status(201).json(response)
    } catch (e) {
        next(e);
    }
}

const signIn = async (req, res, next) => {
    try {
        const body = req.body;
        const response = await singInDB(body);
        res.status(200).json(response)
    } catch (e) {
        next(e)
    }
}


const getSingleUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await getSingleUserDB(id)
        res.status(200).json(response)
    } catch (e) {
        next(e)
    }
}

const updatePassword = async (req, res, next) => {
    try {
        const { userId } = req.query;
        const body = req.body;

        const response = await updatePasswordDB(userId, body)
        res.status(200).json(response)
    } catch (e) {
        next(e)
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const query = req.query;
        const response = await getAllUserDB(query)
        res.status(200).json(response)
    } catch (e) {
        next(e)
    }
}
module.exports = {
    signUp,
    signIn,
    getSingleUser,
    updatePassword,
    getAllUser
}