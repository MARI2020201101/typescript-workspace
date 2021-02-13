"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var circle1 = new Circle_1.Circle("1", "2", "3");
var circle2 = new Circle_1.Circle("2", "3", "4");
var circle3 = new Circle_1.Circle("5", "6", "7");
var shapes = [];
shapes.push(circle1);
shapes.push(circle2);
shapes.push(circle3);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getinfo());
}
