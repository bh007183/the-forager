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
            phone: req.body.phone
        })
      .then(data=> {res.json(data).status(500)})
      .catch(err => {res.status(400).json(err).send(err._message) })
    })
}