"use strict";
const vector_1 = require('./vector');
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vector = new vector_1.Vector(x, y);
    }
    move(vector) {
        this.vector.x = vector.x;
        this.vector.y = vector.y;
    }
    addVector(vector) {
        return new Point(this.x + vector.x, this.y + vector.y);
    }
    substract(point) {
        return new vector_1.Vector(this.x - point.x, this.y - point.y);
    }
    getVector(point) {
        return this.substract(point);
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map