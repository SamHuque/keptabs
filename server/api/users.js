const router = require("express").Router();
const User = require("../db/models/user");

// get all users
router.get("/", async (req, res, next) => {
  try {
    const data = await User.findAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

//get users by id
router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const data = await User.findOne({
      where: {
        id: userId
      }
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
