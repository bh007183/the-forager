const db = require("../models/index")
var router = require('express').Router()

 router.post("/api/rocks", async (req, res) => {
     console.log(req.body)
     const data = await db.Rocks.create(req.body)
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })

 router.get("/api/rocks", async (req, res) => {
     console.log(req.body)
     const data = await db.Rocks.find({})
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
     console.log(data)
 })

 router.delete("/api/rocks", async (req, res) => {
     console.log(req.body)
     const data = await db.Rocks.deleteMany({})
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
     console.log(data)
 })

 router.post("/api/animals", async (req, res) => {
     console.log(req.body)
     const data = await db.Animal.create(req.body)
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })

 router.get("/api/animals", async (req, res) => {
     console.log(req.body)
     const data = await db.Animal.FindAll()
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })

 router.get("/api/fungie", async (req, res) => {
     console.log(req.body)
     const data = await db.Fungie.FindAll()
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })
 
 router.post("/api/fungie", async (req, res) => {
     console.log(req.body)
     const data = await db.Fungie.create(req.body)
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })

 router.get("/api/plants", async (req, res) => {
     console.log(req.body)
     const data = await db.Plants.FindAll()
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })

 router.post("/api/plants", async (req, res) => {
     console.log(req.body)
     const data = await db.Plants.create(req.body)
     .catch(err => res.json(err))
     .then(data => res.json(data).end())
 })
    

 
module.exports = router