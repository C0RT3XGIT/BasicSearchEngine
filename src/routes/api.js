const express = require("express");
const router = express.Router();
const DBSchema = require("../models/DBModel");

//Create route to db as JSON
router.get("/api", (req, res) => {
  DBSchema.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(`Rejected ! Can't get data !`, error);
    });
});

module.exports = router;
