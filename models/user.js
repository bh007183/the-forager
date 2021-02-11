const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
  userName: {
    trim: true,
    type: String,
    unique: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    required: "Password is Required",
    validate: [({length}) => length >= 6, "Password should be longer"]
  },

  phone: {
      type: Number,
      unique: true,
      trim: true,
      validate: [({length}) => length === 10, "Please enter a 10 digit phone number."]
      

  }


});


const Users = mongoose.model("Users", UserSchema);

module.exports = Users;