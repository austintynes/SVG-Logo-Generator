const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoName",
      message: "Name of logo (up to 3 words): ",
      validate: function (input) {
        // Split the input into words and count the number of words
        const words = input.trim().split(/\s+/);
        if (words.length <= 3) {
          return true; // Input is valid if it has up to 3 words
        } else {
          return "Please enter up to 3 words for the logo name.";
        }
      },
    },
    {
      type: "select",
      name: "textColor",
      message: "What color do you want the text to be?: ",
      choices: [
        "Black",
        "Blue",
        "Gray",
        "Green",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "White",
        "Yellow",
      ],
    },
    {
      type: "select",
      name: "shape",
      message: "What shape do you want?: ",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "select",
      name: "shapeColor",
      message: "What color do you want the shape to be?: ",
      choices: [
        "Black",
        "Blue",
        "Gray",
        "Green",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "White",
        "Yellow",
      ],
    },
  ])
  .then((answers) => {
    console.log("Logo Name: " + answers.logoName);
  })
  .catch((error) => {
    console.error(error);
  });

// write file

// output text is "Generated logo.svg" is printed in the command line

//WHEN open the 'logo.svg' file in a browser THEN I am shown a 300x200 pixel image
