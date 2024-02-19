const router = require("express").Router();
const { User } = require("../models/Usermodel.js");
const bcrypt = require("bcrypt");

function convertToEng(input) {
  // Replace letters according to the conversion mapping
  var tamilConversion = input.replace(/./g, function (character) {
    switch (character.toLowerCase()) {
      case "க":
        return "a";
      case "ங":
        return "b";
      case "ச":
        return "c";
      case "ஞ":
        return "d";
      case "ட":
        return "e";
      case "ண":
        return "f";
      case "த":
        return "g";
      case "ந":
        return "h";
      case "ன":
        return "i";
      case "ப":
        return "j";
      case "ம":
        return "k";
      case "ய":
        return "l";
      case "ர":
        return "m";
      case "ற":
        return "n";
      case "ல":
        return "o";
      case "வ":
        return "p";
      case "ழ":
        return "q";
      case "வ":
        return "r";
      case "ழ":
        return "s";
      case "ள":
        return "t";
      case "ற":
        return "u";
      case "ன":
        return "v";
      case "கா":
        return "w";
      case "ஙா":
        return "x";
      case "சா":
        return "y";
      case "ஞா":
        return "z";

      // Add more character replacements as needed
      default:
        return character;
    }
  });

  return tamilConversion;
}

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // console.log(user, req.body.username);
    if (!user) return res.status(404).send({ message: "User does not exist" });

    // Boolian check for algo
    console.log(req.body.password,user.password);
    const validPassword =await bcrypt.compare(
      req.body.password,
      convertToEng(user.password)
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Password" });

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
