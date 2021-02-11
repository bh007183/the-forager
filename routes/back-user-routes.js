const db = require("../models")
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = function(app){

    app.post("/api/addAccount", (req, res) => {
      const hashedPass = bcrypt.hashSync(req.body.password, saltRounds)
      db.Users.create(
          {
            userName: req.body.userName,
            password: hashedPass,
            phone: phoneNumber
        })
      .then(res.status(200))
      .catch(res.status(400).send("Something is wrong on line 7 create user."))
    })
}