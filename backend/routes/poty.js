const express = require("express");
const Poty = require("../models/poty");
const router = express.Router();

router.get("", (req, res, next) => {
  Poty.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      poty: documents
    });
  });
});
module.exports = router;