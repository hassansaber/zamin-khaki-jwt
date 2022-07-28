const JWT = require("jsonwebtoken");

//
module.exports = function (req, res, next) {
  //fetch token value from header
  const token = req.header("auth-token");
  //401 forbidden access
  if (!token) return res.status(401).send("Access-Denied");

  try {
    //if token matches with secret key
    const verified = JWT.verify(token, process.env.TOKEN_SECRET);
    //user is verified
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).send("Invalid-User");
  }
};
