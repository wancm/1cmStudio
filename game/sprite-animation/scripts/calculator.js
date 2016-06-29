;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    getVector(destinationPoint) {
        return new Vector(destinationPoint.x - this.x, destinationPoint.y - this.y);
    }
}
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /*
        a method to use scaling the disance of the velocity
     */
    getLength() {
        return Math.sqrt(this.getLengthSquare());
    }
    getLengthSquare() {
        return (this.x * this.x) + (this.y * this.y);
    }
    /*
        Veloctiy hat
        a method to use scaling the velocity of the character.
        ex.(if I want to double up the speed, I wil just invoke vector.scale(2) )
     */
    scale(scale) {
        this.x * scale;
        this.y * scale;
    }
    /*
        to add 2 Vector and return a new calculated Vector
     */
    add(vectorToAdd) {
        return new Vector(this.x + vectorToAdd.x, this.y + vectorToAdd.y);
    }
    moveRightDown() {
    }
    /*
        to sunstract 2 Vector and return a new calculated Vector
     */
    substract(vectorToSubstract) {
        return new Vector(this.x - vectorToSubstract.x, this.y - vectorToSubstract.y);
    }
    /*
        a method to use for getting where (which direction) is the character is looking at
     */
    normalized() {
        var length = this.getLength();
        // formula: vector / distance
        return new Vector(this.x / length, this.y / length);
    }
    /*
        return 0 if both are equal
        return 1 if this is bigger than objectToCompare
        reuturn -1 if objectToCompare is bigger than this
    */
    compareLength(vectorToCompare) {
        var squareThisLength = this.getLengthSquare();
        var squareVectorToCompareLength = vectorToCompare.getLengthSquare();
        // return 0 if both are equal
        if (squareThisLength === squareVectorToCompareLength)
            return 0;
        // return 1 if this is bigger than vectorToCompare
        // reuturn -1 if vectorToCompare is bigger than this
        return squareThisLength > squareVectorToCompareLength ? 1 : -1;
    }
}
class Calculator {
    constructor() {
        var p = new Point(0, -1);
        var i = new Point(1, 1);
        var c = new Point(2, -1);
        var cp = c.getVector(p);
        var ip = i.getVector(p);
        console.log(cp.getLengthSquare());
        console.log(ip.getLengthSquare());
        var i1 = new Point(3, 4);
        var p1 = new Point(1, 2);
        var pi = p1.getVector(i1);
        var normalized = pi.normalized();
        console.log(normalized.x);
        console.log(normalized.y);
        console.log(normalized.getLength());
    }
}
var c = new Calculator();
//# sourceMappingURL=calculator.js.map