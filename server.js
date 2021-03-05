const express = require("express");
const mongoose = require("mongoose");
const db = require("./models")


const PORT = process.env.PORT || 7000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





//routes 
app.use(require("./routes/back-api-routes.js"));
require("./routes/back-user-routes")(app);

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantsdb", {
  useNewUrlParser: true,
  
})


app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});