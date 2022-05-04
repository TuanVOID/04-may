"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./Square");
// let shape = new Shape("red", true)
//
// console.log(shape);
// console.log(shape.toString())
// let circle1 = new Circle(2,"red", false)
//
// console.log(circle1)
// console.log(circle1.getRadius())
// console.log(circle1.getArea());
// console.log(circle1.toString())
// let rec:Rectangle = new Rectangle(2,5,"cyan", true)
// console.log(rec.getPerimeter())
// console.log(rec.toString())
// console.log(rec.getArea())
var square = new Square_1.Square(6, "yellow", true);
console.log(square.getPerimeter());
console.log(square.getArea());
console.log(square.toString());
