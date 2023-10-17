const inquirer = require("inquirer");
const fs = require('fs')
const { Circle, Square, Triangle } = require("./lib/shapes");

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
      type: "list",
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
      type: "list",
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
    if (answers.shape === "Square") {
      const shape = new Square (answers.logoName, answers.textColor, answers.shape, answers.shapeColor)
      fs.writeFileSync("./dist/square.svg", shape.render())
    } else if (answers.shape === "Triangle") {
      const shape = new Triangle (answers.logoName, answers.textColor, answers.shape, answers.shapeColor)
      fs.writeFileSync("./dist/triangle.svg", shape.render())
    } else {
      const shape = new Circle (answers.logoName, answers.textColor, answers.shape, answers.shapeColor)
      fs.writeFileSync("./dist/circle.svg", shape.render())
    }
  })
  .catch((error) => {
    console.error(error);
  });

// write file

// output text is "Generated logo.svg" is printed in the command line

//WHEN open the 'logo.svg' file in a browser THEN I am shown a 300x200 pixel image
