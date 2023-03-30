const router = require("express").Router();
const Phones = require("../models/Phone.model");

// Get all Phones
router.get("/", async (req, res, next) => {
    try {
        const response = await Phones.find().select('id name')
        res.json(response);
    } catch (error) {
        next(error)
    }
  });

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await Phones.findById(id)
        res.json(response)
    } catch (error) {
        next(error)
    }
})
module.exports = router;
