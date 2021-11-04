class Shape {
  constructor(name, side, sideLength) {
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    return this.side * this.sideLength;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    return this.sideLength * 4;
  }
}

const square1 = new Square(3);
console.log(square1.calcArea(), square1.calcPerimeter());
