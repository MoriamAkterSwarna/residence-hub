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
    permanent: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('UserModel', userSchema);