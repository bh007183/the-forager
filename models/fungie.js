const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const FungieSchema = new Schema({
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

const Fungie = mongoose.model("Fungie", FungieSchema);

module.exports = Fungie;
