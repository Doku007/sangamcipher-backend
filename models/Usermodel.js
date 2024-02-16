const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 30 },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userschema);

module.exports = { User };
