
class Square{
    private _side:number;
    public x:number;
    public y:number;

    constructor(x:number, y:number, side:number){
        this.x = x;
        this.y = y;
        this._side = side;
    }

    calculateArea(): number{
        return this._side * this._side;
    }

    get side(): number{
        return this._side;
    }

    set side(newSide: number){
       if(newSide > 0){
        this._side = newSide;
       }
       else{
        console.error("Incorrect new value for side.");
       }
    }
}

const square = new Square(10, 20, 5);
console.log(square.side);
console.log(square.calculateArea());

square.side = 8;
console.log(square.side);
console.log(square.calculateArea());