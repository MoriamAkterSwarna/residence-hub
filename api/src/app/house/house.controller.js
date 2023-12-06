const catchAsync = require("../../utils/catchAsync");
const {  createHouseDB, deleteHouseDB, getSingleHouseFromDB, getAllHouseFromDB, updateHouseDB } = require("./house.services");
const { houseValidationSchema, updateHouseValidationSchema } = require("./house.validation");



const createHouse = catchAsync(async (req, res) => {
  
        const { body } = req;
        const zodParsedData = await houseValidationSchema.parseAsync(body);
        const houseData = await createHouseDB(zodParsedData);
        // const houseData = await createHouseDB(body);

        res.status(201).json({
            status: "success",
            data: houseData,
        });
    
})
const getAllHouse =catchAsync( async (req, res) => {
        console.log(req.query)
        const { query } = req;
        const houseData = await getAllHouseFromDB(query);
        console.log(houseData)
        res.status(200).json({
            status: "success",
            data: houseData,
        });
   
})

const getSingleHouse = catchAsync(async (req, res) => {
  
        const { houseId } = req.params;
        const houseData = await getSingleHouseFromDB(houseId);
        res.status(200).json({
            status: "success",
            data: houseData,
        });
   
})
const updateHouse = catchAsync(async (req, res) => {
      
          const { houseId } = req.params;
          const { body } = req;
          const zodParsedData = await updateHouseValidationSchema.parseAsync(body);
          const houseData = await updateHouseDB(houseId, zodParsedData);
        //   console.log(houseData, 'controller')
          res.status(200).json({
                status: "success",
                data: houseData,
          });
     
    })
const deleteHouse = catchAsync(async (req, res) => {
    
        const { userId, houseId } = req.query;
        console.log(houseId, userId)
        const houseData = await deleteHouseDB(userId,houseId);
        console.log(houseData)
        res.status(203).json({
            status: "success",
            data: houseData,
        });
    
})


module.exports = {
    createHouse,
    deleteHouse,
    getAllHouse,
    getSingleHouse,
    updateHouse
    
}
