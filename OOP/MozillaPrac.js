function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function () {
    return this.sides * this.sideLength;
  };
}

const shape1 = new Shape("square", 4, 5);
console.log(shape1.calcPerimeter());
