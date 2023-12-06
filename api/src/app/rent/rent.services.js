const Rent = require('../rent/rent.model')
const House = require('../house/house.model');
const error = require('../../utils/error');
const {formatDistance} = require('date-fns')

const houseRentDB = async (userId, houseId, releaseDate) => {

    const houseData = await House.findById({ _id: houseId })
    const rentDate = houseData?.availableDate;


    if (!houseData) {
        const RH_ERROR = error('Data Not Found', 404)
        throw RH_ERROR
    } else {
        if (releaseDate) {

            

            const value = formatDistance(new Date(rentDate), new Date(releaseDate))
            console.log(value)
            const houseData = await House.findOneAndUpdate(
                { _id: houseId },
                { status: 'available', availableDate: releaseDate }
            )
        } else {
            const houseData = await House.findOneAndUpdate(
                { _id: houseId },
                { status: 'booked' }
            )
        }

        const isExistHouse = await Rent.findOne({ houseId })

        if (isExistHouse) {
            const RH_ERROR = error('Something went wrong', 400)
            throw RH_ERROR
        } else {
            const newRent = new Rent({
                houseId,
                userInfo: [
                    {
                        userId,
                        dateOfRent: rentDate,
                        releaseDate
                    }
                ]
            })

            const value = await newRent.save()


            return {
                value

            }
        }
    }


}
module.exports = {
    houseRentDB
}