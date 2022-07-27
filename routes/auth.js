const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");
const JWT = require("jsonwebtoken");

const User = require("../model/User.model");
//----- /api/users/

//--------REGISTER
router.get("/", (req, res) => {
  res.send("inside users");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //validate user data
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //checking email already exist
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).send("Email already exist");

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create model
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.status(201).send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send({
      status: "failed",
      msg: err,
    });
  }
});

//-----LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //validate user data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check email existence
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid Email");

  //validate password decryting
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //create web token  for who successfully logged in
  const token = JWT.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);

  // res.send(req.body);

  //
});

//-----
module.exports = router;
