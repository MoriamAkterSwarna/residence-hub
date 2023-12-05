const {  createHouseDB, deleteHouseDB } = require("./house.services");

const createHouse = async (req, res) => {
    try {
        const { body } = req;
        const houseData = await createHouseDB(body);
        res.status(201).json({
            status: "success",
            data: houseData,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
}
const deleteHouse = async (req, res) => {
    try {
        const { userId, houseId } = req.query;
        console.log(houseId, userId)
        const houseData = await deleteHouseDB(userId,houseId);
        console.log(houseData)
        res.status(200).json({
            status: "success",
            data: houseData,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
}


module.exports = {
    createHouse,
    deleteHouse,
    
}
