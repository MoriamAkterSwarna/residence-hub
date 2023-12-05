 const  House = require('./house.model');
const createHouseDB = async (house) => {
    try {
        const houseData = House.create(house);
        return houseData;
    } catch (error) {
        throw new Error(error);
    }
}
const deleteHouseDB = async (userId, houseId) => {
    try {
        
        const houseData = House.findOneAndDelete({ userId, _id: houseId });
        return houseData;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    createHouseDB,
    deleteHouseDB,
}