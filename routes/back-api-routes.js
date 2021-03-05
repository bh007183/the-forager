const db = require("../models/index")
import axios from ("axios")
module.exports = function(app){
 axios.post("/api/rocks", async (req, res) => {
     const data = await db.Rocks.create(req.body)
     .then(res.json(data))
     .catch(err => res.json(err))
 })
    

 
}