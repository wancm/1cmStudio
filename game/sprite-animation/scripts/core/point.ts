/*
    represents of Distance and Velocity
    vector equal to (degree, length) in physcis, but (x,y) in game
*/
export interface IVector {
    x: number;
    y: number;
    getLength(): number;
};

export class Point implements IVector {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getLength(): number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    public getVector(objectToCompare: IVector): IVector {
        return new Point(this.x - objectToCompare.x,
            this.y - objectToCompare.y);
    }

    /*
        return 0 if both are equal
        return 1 if this is bigger than objectToCompare
        reuturn -1 if objectToCompare is bigger than this
    */
    public compareLength(objectToCompare: IVector): number {
        var squareThisLength = (this.x * this.x) + (this.y * this.y);
        var squareObjectToCompareLength = (objectToCompare.x * objectToCompare.x) + (objectToCompare.y * objectToCompare.y);

        // return 0 if both are equal
        if (squareThisLength === squareObjectToCompareLength) return 0;

        // return 1 if this is bigger than objectToCompare
        // reuturn -1 if objectToCompare is bigger than this
        return squareThisLength > squareObjectToCompareLength ? 1 : -1;
    }
}