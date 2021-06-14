const mongoose = require('mongoose')


const user = mongoose.Schema({
  fullname: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  age: {
    type: Number
  },
  city:{
      type:String
  },
  phone:{
      type:String
  }


 
 
})


module.exports = mongoose.model('User', user)