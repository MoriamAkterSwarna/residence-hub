 const  House = require('./house.model');
const createHouseDB = async (house) => {
    try {
        
        const houseData = House.create(house);
        return houseData;
    } catch (error) {
        throw new Error(error);
    }
}
const getAllHouseFromDB = async (query) => {
    const {availableDate, limit,currentPage,sortType,sortBy} = query
        const date =availableDate
      const skip = (currentPage-1)*(Number(limit)) || 0
      const sortOrder = sortType === 'asc' ? 1 : -1

      const sort= {[sortBy]:sortOrder}
    try {
        const housesData = await House.find({availableDate: date}).sort(sort).skip(skip).limit(parseInt(limit));
        // console.log(housesData, 'housesData services')
        return housesData;
    } catch (error) {
        throw new Error(error);
    }
}
const getSingleHouseFromDB = async (houseId) => {
    try {
        const houseData = House.findById(houseId);
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
    getAllHouseFromDB,
    getSingleHouseFromDB
}