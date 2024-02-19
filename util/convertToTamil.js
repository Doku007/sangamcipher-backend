function convertToTamil(input) {
    // Replace letters according to the conversion mapping
    var tamilConversion = input.replace(/./g, function (character) {
      switch (character.toLowerCase()) {
        case "a":
          return "அ";
        case "b":
          return "ஆ";
        case "c":
          return "இ";
        case "d":
          return "ஈ";
        case "e":
          return "உ";
        case "f":
          return "ஊ";
        case "g":
          return "எ";
        case "h":
          return "ஏ";
        case "i":
          return "ஐ";
        case "j":
          return "ஒ";
        case "k":
          return "ஓ";
        case "l":
          return "க";
        case "m":
          return "ங";
        case "n":
          return "ச";
        case "o":
          return "ஞ";
        case "p":
          return "ட";
        case "q":
          return "ண";
        case "r":
          return "த";
        case "s":
          return "ந";
        case "t":
          return "ப";
        case "u":
          return "ம";
        case "v":
          return "ய";
        case "w":
          return "ர";
        case "x":
          return "ல";
        case "y":
          return "வ";
        case "z":
          return "ள";
  
        // Add more character replacements as needed
        default:
          return character;
      }
    });
  
    return tamilConversion;
  };

  module.exports = convertToTamil;