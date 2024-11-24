var Square = /** @class */ (function () {
    function Square(x, y, side) {
        this.x = x;
        this.y = y;
        this._side = side;
    }
    Square.prototype.calculateArea = function () {
        return this._side * this._side;
    };
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (newSide) {
            if (newSide > 0) {
                this._side = newSide;
            }
            else {
                console.error("Incorrect new value for side.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}());
var square = new Square(10, 20, 5);
console.log(square.side);
console.log(square.calculateArea());
square.side = 8;
console.log(square.side);
console.log(square.calculateArea());
