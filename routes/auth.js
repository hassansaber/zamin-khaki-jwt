const router = require("express").Router();

//----- /api/users/

router.get("/", (req, res) => {
  res.send("inside users");
});

router.post("/register", (req, res) => {
  res.send("posting  for register");
});

//-----
module.exports = router;
