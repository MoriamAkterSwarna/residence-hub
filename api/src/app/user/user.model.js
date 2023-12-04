const { Schema, model } = require('mongoose')
const userSchema = new Schema({
    email: {
        type: String,

    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    nid: {
        type: String,

    },
    photo: {
        type: String,

    },
    role: {
        type: String,
        enum: ["user", "houseOwner", "admin"],
        default: "user",
        required: true
    },
    houseIDForRent: [
        {
            type: Schema.Types.ObjectId,
            ref: "House",
        },
    ],
    houseIdToGetRent: [
        {
            type: Schema.Types.ObjectId,
            ref: "House",
        }
    ]
})

const User = model('User', userSchema);
module.exports = User