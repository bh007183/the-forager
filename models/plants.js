const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  image: {
      type: String,
      require: true

    },
 

  name: {
    type: String,
    unique: true,
  },

  notes: {
    type: Boolean,
    require: true
  }
});

const Plants = mongoose.model("Plants", PlantSchema);

module.exports = Plants;
