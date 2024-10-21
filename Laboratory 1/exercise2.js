class Square{
    #_side;

    constructor(x, y, side){
        this.x = x;
        this.y = y;
        this.#_side = side;
    }

    calculateArea(){
        return this.#_side * this.#_side;
    }

    get side(){
        return this.#_side;
    }

    set side(newSide){
       if(newSide > 0){
        this.#_side = newSide;
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
