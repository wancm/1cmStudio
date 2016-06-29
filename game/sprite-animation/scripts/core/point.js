"use strict";
;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getLength() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    getVector(objectToCompare) {
        return new Point(this.x - objectToCompare.x, this.y - objectToCompare.y);
    }
    /*
        return 0 if both are equal
        return 1 if this is bigger than objectToCompare
        reuturn -1 if objectToCompare is bigger than this
    */
    compareLength(objectToCompare) {
        var squareThisLength = (this.x * this.x) + (this.y * this.y);
        var squareObjectToCompareLength = (objectToCompare.x * objectToCompare.x) + (objectToCompare.y * objectToCompare.y);
        // return 0 if both are equal
        if (squareThisLength === squareObjectToCompareLength)
            return 0;
        // return 1 if this is bigger than objectToCompare
        // reuturn -1 if objectToCompare is bigger than this
        return squareThisLength > squareObjectToCompareLength ? 1 : -1;
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map