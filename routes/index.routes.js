const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//Phone routes
router.use('/phones', require('./phone.routes.js'));

module.exports = router;
