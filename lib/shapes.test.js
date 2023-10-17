const { Circle, Square, Triangle } = require("./shapes");

test("Circle color equals red", () => {
  const shape = new Circle("abc", "black", "circle", "red");
  expect(shape.shapeColor).toBe("red");
});

test("Square text color equals black", () => {
  const shape = new Square("abc", "black", "circle", "red");
  expect(shape.textColor).toBe("black");
});

test("Square text color equals black", () => {
    const shape = new Triangle("abc", "black", "circle", "red");
    expect(shape.textColor).toBe("black");
  });
 