const router = require("express").Router();

const User = require("../model/User.model");
//----- /api/users/

router.get("/", (req, res) => {
  res.send("inside users");
});

router.post("/register", (req, res) => {
  // res.send(req.body);
  const {name , email, password } = req.body

  const user
});

//-----
module.exports = router;
