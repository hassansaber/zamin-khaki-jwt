const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: String,
    default: Date.now,
    required: true,
    min: 6,
    max: 1024,
  },
});

module.exports = mongoose.model("Users", userSchema);

// {
//     "name": "hassan",
//     "email": "hassan@gmail.com",
//     "password": "hassan43547657",
//     "date": "1378/05/23"
// }
