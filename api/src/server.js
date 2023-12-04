
const mongoose = require('mongoose');
const MongooseConnection = () => {
  return mongoose.connect(`mongodb+srv://residence-hub:JzfDRfpsF8cbYOV8@cluster0.7cqr184.mongodb.net/residence-hub?retryWrites=true&w=majority`);
}

module.exports = MongooseConnection;