const { User } = require("../models/Usermodel");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const convertToTamil = require("../util/convertToTamil.js")

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res.status(409).send({ message: "Username already in use" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const dbPass = convertToTamil(req.body.password);
    const hashPassword = await bcrypt.hash(dbPass, salt);
    


    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
    console.log(error);
  }
});

module.exports = router;
