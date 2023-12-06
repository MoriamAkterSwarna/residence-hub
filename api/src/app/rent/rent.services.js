const Rent = require('../rent/rent.model')
const House = require('../house/house.model')
const houseRentDB = async (userId, houseId, rentDate, releaseDate) => {

    if (releaseDate) {
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
module.exports = {
    houseRentDB
}