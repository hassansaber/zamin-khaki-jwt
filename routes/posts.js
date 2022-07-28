const router = require("express").Router();
const verify = require("../routes/verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    post: {
      title: "my first post",
      description: "Somthing inside here",
    },
  });
});

module.exports = router;
