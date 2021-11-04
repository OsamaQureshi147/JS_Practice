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

const shape1 = new Shape("rectangle", 4, 5);
const shape2 = new Shape("triangle", 3, 5);
console.log(shape1, shape2);
console.log("Perimeter of shape 1 is ", shape1.calcPerimeter());
console.log("Perimeter of shape 2 is ", shape2.calcPerimeter());
