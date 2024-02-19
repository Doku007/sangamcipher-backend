function convertToTamil(input) {
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
          return "உ";
        case "x":
          return "இ";
        case "y":
          return "ஆ";
        case "z":
          return "கு";
  
        // Add more character replacements as needed
        default:
          return character;
      }
    });
  
    return tamilConversion;
  };

  module.exports = convertToTamil;