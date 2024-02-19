const convertToTamil = require("../util/convertToTamil.js")
const router = require("express").Router();
const { User } = require("../models/Usermodel.js");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // console.log(user, req.body.username);
    if (!user) return res.status(404).send({ message: "User does not exist" });

    // Boolian check for algo
    console.log(req.body.password,user.password);
    const validPassword =await bcrypt.compare(
      convertToTamil(req.body.password),
      user.password
    );

    if (!validPassword)
      return res.status(401).send({ message: "Invalid Password" });
     // return res.status(401).send({ message: "Invalid Password" });

    // console.log(user.username);
    res.status(200).send({
      username: user.username,
      message: "logged in successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
module.exports = router;
