const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const RockSchema = new Schema({
  image: {
      type: String,
      require: true

    },
 

  notes: {
    type: String,
    require: true
  }
});

const Rocks = mongoose.model("Rocks", RockSchema);

module.exports = Rocks;
