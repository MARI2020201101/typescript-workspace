export class Shape {
   
    public get x(): string {
        return this._x;
    }
    public set x(value: string) {
        this._x = value;
    }
  
    public get y(): string {
        return this._y;
    }
    public set y(value: string) {
        this._y = value;
    }

    constructor(private _x :string, private _y : string){
    
    }

    getinfo(): string{
        return `x = ${this._x} and y = ${this._y}`;
    }
}