const { createHouse, deleteHouse, getSingleHouse } = require('./house.controller');
const Router= require('express').Router();


Router.post('/set/house-rent', createHouse)
Router.get('/house/:houseId', getSingleHouse)
Router.delete('/house', deleteHouse)

module.exports = Router;
