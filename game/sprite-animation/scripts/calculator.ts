/*
    moving of Destination
    represents of Destination and Distance
    vector equal to (degree, length) in physcis, but (x,y) in game
*/
interface IVector {
    x: number;
    y: number;
    getLength(): number;
    getLengthSquare(): number;
    scale(scale: number): void;
    normalized(): IVector;
    add(vectorToAdd: IVector): IVector;
    substract(vectorToSubstract: IVector): IVector;
};

class Point {
    constructor(public x: number, public y: number) { };

    public getVector(destinationPoint: Point): IVector {
        return new Vector(destinationPoint.x - this.x, destinationPoint.y - this.y)
    }
}

class Vector implements IVector {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /*
        a method to use scaling the disance of the velocity
     */
    public getLength(): number {
        return Math.sqrt(this.getLengthSquare());
    }

    public getLengthSquare(): number {
        return (this.x * this.x) + (this.y * this.y);
    }

    /*
        Veloctiy hat
        a method to use scaling the velocity of the character.
        ex.(if I want to double up the speed, I wil just invoke vector.scale(2) )
     */
    public scale(scale: number): void {
        this.x * scale;
        this.y * scale;
    }

    

    /*
        to add 2 Vector and return a new calculated Vector
     */
    public add(vectorToAdd: IVector): IVector {
        return new Vector(this.x + vectorToAdd.x,
            this.y + vectorToAdd.y);
    }

    public moveRightDown(): void {

    }

    /*
        to sunstract 2 Vector and return a new calculated Vector
     */
    public substract(vectorToSubstract: IVector): IVector {
        return new Vector(this.x - vectorToSubstract.x,
            this.y - vectorToSubstract.y);
    }

    /*
        a method to use for getting where (which direction) is the character is looking at
     */
    public normalized(): IVector {
        var length = this.getLength();

        // formula: vector / distance
        return new Vector(this.x / length,
            this.y / length);
    }

    /*
        return 0 if both are equal
        return 1 if this is bigger than objectToCompare
        reuturn -1 if objectToCompare is bigger than this
    */
    public compareLength(vectorToCompare: IVector): number {
        var squareThisLength = this.getLengthSquare();
        var squareVectorToCompareLength = vectorToCompare.getLengthSquare();

        // return 0 if both are equal
        if (squareThisLength === squareVectorToCompareLength) return 0;

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