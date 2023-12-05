const User = require('../user/user.model');
const House = require('./house.model');
const createHouseDB = async (house) => {
    try {
        
        const houseData = await House.create(house);
         await User.findOneAndUpdate({
            _id: house.userId
        }, {
            $push: {
                houseIDForRent: houseData._id
            }
        })
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
        const user = await User.findOne({ 
            _id: userId,
            houseIDForRent:{$in: [houseId]}
         });
         if(!user){
             throw new Error('User not found')
         }
        const houseData =await House.findOneAndDelete({ userId, _id: houseId });
        if(houseData){
            await User.updateOne({_id:userId},{$pull: {houseIDForRent: houseId}})
        }
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