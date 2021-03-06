const express = require("express");
const Yoga = require("../models/yoga");
const router = express.Router();

router.get("", (req, res, next) => {
  Yoga.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      yoga: documents
    });
  });
});
module.exports = router;
