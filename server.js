const express = require("express");
const mongoose = require("mongoose");
const db = require("./models")
// const session = require("express-session");

const PORT = process.env.PORT || 7000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//     session({
//       secret: process.env["Keep_it_secret"],
//       resave: false,
//       saveUninitialized: true,
//       cookie: { maxAge: 1000 * 60 * 60 * 2 },
//     })
//   );

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantsdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/back-api-routes.js"));
require("./routes/back-user-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});