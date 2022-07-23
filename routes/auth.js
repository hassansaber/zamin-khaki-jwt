const router = require("express").Router();

const User = require("../model/User.model");
//----- /api/users/

router.get("/", (req, res) => {
  res.send("inside users");
});

router.post("/register", async (req, res) => {
  // res.send(req.body);
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
    // date: Date.now(),
  });

  try {
    const savedUser = await user.save();
    res.status(201).send({ user: savedUser });
  } catch (err) {
    res.status(400).send({
      status: "failed",
      msg: err,
    });
  }
});

//-----
module.exports = router;
