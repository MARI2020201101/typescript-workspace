import {Shape} from "./Shape";
import {Circle} from "./Circle";
let circle1 = new Circle("1","2","3");
let circle2 = new Circle("2","3","4");
let circle3 = new Circle("5","6","7");

let shapes: Shape[] = [];
shapes.push(circle1);
shapes.push(circle2);
shapes.push(circle3);

for (let shape of shapes){
    console.log(shape.getinfo());
}
