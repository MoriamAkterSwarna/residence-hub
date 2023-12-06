const { z } = require('zod');

const houseSchema = z.object({
    photo: z.array(z.string()).nonempty(),
    address: z.string().nonempty(),
    floor: z.string().nonempty(),
    bedRoom: z.number().int().positive(),
    washRoom: z.number().int().positive(),
    kitchen: z.number().int().positive(),
    diningRoom: z.number().int().positive(),
    tiles: z.boolean(),
    electricity: z.boolean(),
    gas: z.boolean(),
    water: z.boolean(),
    lift: z.boolean(),
    garage: z.boolean(),
    extraFacility: z.string(),
    userId: z.string(), 
    status: z.enum(['booked', 'available', 'underConstruction']),
    rentDate: z.optional(z.date()),
    availableDate: z.string().nonempty(),
});

module.exports = houseSchema;
