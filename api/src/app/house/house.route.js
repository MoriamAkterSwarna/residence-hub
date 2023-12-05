 const Router= require('express').Router();
const {  createHouse, deleteHouse } = require('./house.conrtoller');

Router.post('/set/house-rent', createHouse)
Router.delete('/house/:houseId', deleteHouse)

module.exports = Router;
