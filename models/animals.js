const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  image: {
      type: String,
      require: true

    },
 
  name: {
    type: String,
    unique: true,
  },

  notes: {
    type: String,
    require: true
  }
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;