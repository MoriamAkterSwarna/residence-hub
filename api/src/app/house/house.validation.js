const { z } = require('zod');

const houseValidationSchema = z.object({
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
const updateHouseValidationSchema = z.object({
    photo: z.array(z.string()).optional(),
    address: z.string().optional(),
    floor: z.string().optional(),
    bedRoom: z.number().int().positive().optional(),
    washRoom: z.number().int().positive().optional(),
    kitchen: z.number().int().positive().optional(),
    diningRoom: z.number().int().positive().optional(),
    tiles: z.boolean().optional(),
    electricity: z.boolean().optional(),
    gas: z.boolean().optional(),
    water: z.boolean().optional(),
    lift: z.boolean().optional(),
    garage: z.boolean().optional(),
    extraFacility: z.string().optional(),
    userId: z.string().optional(), 
    status: z.enum(['booked', 'available', 'underConstruction']).optional(),
    rentDate: z.optional(z.date()).optional(),
    availableDate: z.string().optional(),
});
module.exports = {
    houseValidationSchema,
    updateHouseValidationSchema
}
