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
    req.session.userId = existingUser.id;
    res.json(existingUser);
  } else {
    const err = new Error("Incorrect email or password");
    err.status = 401;
    next(err);
  }
});

module.exports = router;
