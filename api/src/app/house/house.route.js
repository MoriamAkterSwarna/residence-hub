const { createHouse, deleteHouse, getSingleHouse, getAllHouse, updateHouse } = require('./house.controller');
const Router= require('express').Router();


Router.post('/set/house-rent', createHouse)
Router.get('/house', getAllHouse)
Router.get('/house/:houseId', getSingleHouse)
Router.patch('/house/:houseId', updateHouse)
Router.delete('/house', deleteHouse)

module.exports = Router;
