const db = require("../models/index");
var router = require("express").Router();

router.post("/api/post", async (req, res) => {
  console.log(req.body);
  switch (req.body.category) {
    case "Rocks":
      const data = await db.Rocks.create(req.body)
        .catch((err) => res.json(err))
        .then((data) => res.json(data).end());
      break;
    case "Animal":
      const data1 = await db.Animal.create(req.body)
        .catch((err) => res.json(err))
        .then((data1) => res.json(data1).end());
      break;
    case "Fungie":
      const data2 = await db.Fungie.create(req.body)
        .catch((err) => res.json(err))
        .then((data2) => res.json(data2).end());
      break;
    case "Plants":
      const data3 = await db.Plants.create(req.body)
        .catch((err) => res.json(err))
        .then((data3) => res.json(data3).end());
      break;

    default:
      break;
  }
});

router.get("/api/rocks", async (req, res) => {
  console.log(req.body);
  const data = await db.Rocks.find({})
    .catch((err) => res.json(err))
    .then((data) => res.json(data).end());
  console.log(data);
});

router.delete("/api/rocks", async (req, res) => {
  console.log(req.body);
  const data = await db.Rocks.deleteMany({})
    .catch((err) => res.json(err))
    .then((data) => res.json(data).end());
  console.log(data);
});


router.get("/api/animals", async (req, res) => {
  console.log(req.body);
  const data = await db.Animal.find()
    .catch((err) => res.json(err))
    .then((data) => res.json(data).end());
});

router.get("/api/fungie", async (req, res) => {
  console.log(req.body);
  const data = await db.Fungie.find()
    .catch((err) => res.json(err))
    .then((data) => res.json(data).end());
});



router.get("/api/plants", async (req, res) => {
  console.log(req.body);
  const data = await db.Plants.find()
    .catch((err) => res.json(err))
    .then((data) => res.json(data).end());
});


module.exports = router;
