 const Router= require('express').Router();
const {  createHouse } = require('./house.conrtoller');

Router.post('/set/house-rent', createHouse)

module.exports = Router;
