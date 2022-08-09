// Point of this file is to create a connection to mongodb server running port 27017
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function(){
  console.log(`MongoDB Connected at 27017`)
})


