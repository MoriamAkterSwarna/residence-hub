const { Schema, model } = require('mongoose');

const rentSchema = new Schema({
    houseId: {
        type: Schema.Types.ObjectId,
        ref: 'House',
        required: true
    },
    userInfo: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            dateOfRent: {
                type: Date,
                required: true
            },
            releaseDate: {
                type: Date
            }
        }
    ]
})

const Rent = model('Rent', rentSchema)
module.exports = Rent