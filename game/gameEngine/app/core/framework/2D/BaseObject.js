"use strict";
const vector_1 = require('./vector');
class BaseObject {
    constructor(point) {
        this.point = point;
        this.vector = new vector_1.Vector(point.x, point.y);
    }
    getAbsoluteOrigin() {
        return this.point;
    }
    move(x, y) {
        this.vector.x = x;
        this.vector.y = y;
    }
    setPosition(x, y) {
        this.point.x = x;
        this.point.y = y;
    }
    get position() {
        return this.point;
    }
    get velocity() {
        return this.vector;
    }
    set gravity(value) {
        this._gravity = value;
    }
    get gravity() {
        return this._gravity;
    }
    attack(targeEntity) {
        // if target is moving towards to attacker
        var br = this.point.substract(targeEntity.point);
        // normalized it's facing positions        
        var vTargetNormalizedInPlace = br.normalizedInPlace();
        // dotProduct the value of attacker and target 
        var dotProduct = this.vector.dotProduct(vTargetNormalizedInPlace);
        // backstabbing
        if (dotProduct < 0.5) {
            return 999999;
        }
        return 100;
    }
}
exports.BaseObject = BaseObject;
//# sourceMappingURL=BaseObject.js.map