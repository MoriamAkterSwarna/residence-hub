const z = require('zod');
const houseValidationSchema = z.object({ 
    photo: z.array(z.string()).nonempty(),
    address: z.string(),
    floor: z.string(),
    bedRoom: z.number(),
    washRoom: z.number(),
    kitchen: z.number(),
    diningRoom: z.number(),
    tiles: z.boolean(),
    electricity: z.boolean(),
    gas: z.boolean(),
    water: z.boolean(),
    lift: z.boolean(),
    garage: z.boolean(),
    extraFacility: z.array(z.string()).nonempty(),
    userId: z.string(),
    availableDate: z.string(),
    rent: z.number(),
    description: z.string(),
    contact: z.string(),
    status: z.string(),
    
})

module.exports = houseValidationSchema;
