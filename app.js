const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const userRoute = require("./routes/auth");
app.use(express.json());
//----------

//import routes
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("HOME");
});
//----------
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});
const PORT = 8000;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
//pGr9S9fAYs9r9rC2
