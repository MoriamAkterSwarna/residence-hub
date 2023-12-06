const { houseRentDB } = require("./rent.services");

const houseRent = async (req, res, next) => {
    try {
        const { userId, houseId, releaseDate } = req.query;

        console.log(userId, houseId, ' aslfjd')
        const response = await houseRentDB(userId, houseId, releaseDate)
        res.status(201).json(response)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    houseRent
}