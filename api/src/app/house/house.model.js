const { Schema, model } = require("mongoose");

const houseSchema = new Schema({
    photo: {
        type: Array,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    bedRoom: {
        type: Number,
        required: true
    },
    washRoom: {
        type: Number,
        required: true
    },
    kitchen: {
        type: Number,
        required: true
    },
    diningRoom: {
        type: Number,
        required: true
    },
    tiles: {
        type: Boolean,
        required: true
    },
    electricity: {
        type: Boolean,
        required: true
    },
    gas: {
        type: Boolean,
        required: true
    },
    water: {
        type: Boolean,
        required: true
    },
    lift: {
        type: Boolean,
        required: true
    },
    garage: {
        type: Boolean,
        required: true
    },
    extraFacility: {
        type: Array,
        required: true
    },
    userId: {
       type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum:['booked', 'available', 'underConstruction'],
        required: true
    
    },
    rentDate: {
        type: Date,
    },
    availableDate: {
        type:String,
        required: true
    }
    }
    
    
)
 const House = model('House', houseSchema);
module.exports = House
