const { createHouse, deleteHouse } = require('./house.controller');
const Router= require('express').Router();


Router.post('/set/house-rent', createHouse)
Router.delete('/house/:houseId', deleteHouse)

module.exports = Router;
