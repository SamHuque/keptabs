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

router.get("/me", async (req, res, next) => {
  if (!req.session.userId) {
    const err = new Error("user not found");
    err.status(404);
    next(err);
  } else {
    const existingUser = await User.findOne({
      where: {
        id: req.session.userId
      }
    });
    res.send(existingUser);
  }
});

router.delete("/logout", async (req, res, next) => {
  req.session.destroy();
  res.status(204).end();
});

module.exports = router;
