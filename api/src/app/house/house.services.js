 const  House = require('./house.model');
const createHouseDB = async (house) => {
    try {
        const houseData = House.create(house);
        return houseData;
    } catch (error) {
        throw new Error(error);
    }
}



module.exports = {
    createHouseDB,
}