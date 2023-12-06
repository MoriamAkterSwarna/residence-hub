const { houseRentDB } = require("./rent.services");

const houseRent = async (req, res, next) => {
    try {
        const { userId, houseId, rentDate, releaseDate } = req.query;

        console.log(userId, houseId, ' aslfjd')
        const response = await houseRentDB(userId, houseId, rentDate, releaseDate)
        res.status(201).json(response)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    houseRent
}