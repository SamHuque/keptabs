const router = require("express").Router();
const User = require("../db/models/user");

router.put("/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await User.findOne({
    where: {
      email: email,
      password: password
    }
  });
  if (existingUser) {
    res.json(existingUser);
  }
});

module.exports = router;
