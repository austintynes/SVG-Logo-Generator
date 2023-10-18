const index = require("../index");

class Shapes {
  constructor(circle, triangle, square) {}
}

class Circle {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.shape = shape;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `
        <svg height="300" width="200">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

        `;
  }
}

class Square {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.shape = shape;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `
        <svg width="300" height="200">
  <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
  <text x="0" y="15" fill="black">Austins Cool Logo</text>
</svg>
        
        `;
  }
}

class Triangle {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.shape = shape;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `
    <svg height="300" width="200">
    <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
  </svg> 
        
        `;
  }
}

module.exports = { Circle, Square, Triangle };
