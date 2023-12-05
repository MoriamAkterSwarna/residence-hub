
const mongoose = require('mongoose');
<<<<<<< HEAD
 const  MongooseConnection=() =>  {
    
  return mongoose.connect(`mongodb+srv://residence-hub:JzfDRfpsF8cbYOV8@cluster0.7cqr184.mongodb.net/residence-hub?retryWrites=true&w=majority`);

=======
const MongooseConnection = () => {
  return mongoose.connect(`mongodb+srv://residence-hub:JzfDRfpsF8cbYOV8@cluster0.7cqr184.mongodb.net/residence-hub?retryWrites=true&w=majority`);
>>>>>>> 9e246c419d6322a41abe35d2198fb973d023ec60
}

module.exports = MongooseConnection;