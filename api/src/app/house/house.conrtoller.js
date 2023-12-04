const {  createHouseDB } = require("./house.services");

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


module.exports = {
    createHouse,
    
}
