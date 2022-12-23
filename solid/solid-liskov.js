class Figure{
    constructor() {
        this.width = 0;
        this.height = 0;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super();
        this.width = length;
        this.height = length;
    }
}

let rectangle = new Rectangle(5, 4)
console.log(rectangle.getArea());
let square = new Square(5)
console.log(square.getArea());