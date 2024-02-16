const { User } = require("../models/Usermodel");
const router = require("express").Router();
const bcrypt = require("bcrypt");

const convertToTamil = (input) => {
  // Replace letters according to the conversion mapping
  var tamilConversion = input.replace(/./g, function (character) {
    switch (character.toLowerCase()) {
      case "a":
        return "க";
      case "b":
        return "ங";
      case "c":
        return "ச";
      case "d":
        return "ஞ";
      case "e":
        return "ட";
      case "f":
        return "ண";
      case "g":
        return "த";
      case "h":
        return "ந";
      case "i":
        return "ன";
      case "j":
        return "ப";
      case "k":
        return "ம";
      case "l":
        return "ய";
      case "m":
        return "ர";
      case "n":
        return "ற";
      case "o":
        return "ல";
      case "p":
        return "வ";
      case "q":
        return "ழ";
      case "r":
        return "வ";
      case "s":
        return "ழ";
      case "t":
        return "ள";
      case "u":
        return "ற";
      case "v":
        return "ன";
      case "w":
        return "கா";
      case "x":
        return "ஙா";
      case "y":
        return "சா";
      case "z":
        return "ஞா";

      // Add more character replacements as needed
      default:
        return character;
    }
  });

  return tamilConversion;
};

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res.status(409).send({ message: "Username already in use" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const dbPass = convertToTamil(hashPassword);
    await new User({ ...req.body, password: dbPass }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
    console.log(error);
  }
});

module.exports = router;
