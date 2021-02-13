import {Shape} from "./Shape";
export class Circle extends Shape{
   
    
    public get radius(): string {
        return this._radius;
    }
    public set radius(value: string) {
        this._radius = value;
    }

    constructor(theX : string, theY: string, private _radius: string ){
        super(theX, theY);
    }

    
    getinfo(): string{
        return `x = ${this.x} and y = ${this.y} and radius = ${this.radius}` ;
    }

    
}

let circle = new Circle("1","2","3");
console.log(circle.getinfo());

