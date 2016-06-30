"use strict";
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /* Method to add up 2 vector, use when charactor move syncline */
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    /* Method use to scale the vector of the object.
       ex.(if I want to double up the speed, I wil just invoke vector.scale(2) ) */
    scale(scale) {
        return new Vector(this.x * scale, this.y * scale);
    }
    /* Method use to calcualte the disance of the vector */
    length() {
        return Math.sqrt(this.lengthSquare());
    }
    lengthSquare() {
        return (this.x * this.x) + (this.y * this.y);
    }
    /* Method use to getting where (which direction) is the character is looking at. Vector hat*/
    normalizedInPlace() {
        var length = this.length();
        // formula: vector / distance
        return new Vector(this.x / length, this.y / length);
    }
    /* Method use to calcualte whether is it backstabbing situation*/
    dotProduct(targetNormalizeInPlaceVector) {
        return (this.x * targetNormalizeInPlaceVector.x) + (this.y * targetNormalizeInPlaceVector.y);
    }
}
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map