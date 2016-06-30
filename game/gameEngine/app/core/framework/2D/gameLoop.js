"use strict";
const baseObject_1 = require('./baseObject');
const point_1 = require('./point');
const vector_1 = require('./vector');
class GameLoop {
    constructor() {
        this._fps = 60;
        this._currentTime = this.getCurrentTime();
        this._tickPerFrame = this._fps / 1000;
    }
    getCurrentTime() {
        return new Date().getTime();
    }
    run() {
        this._mario = new baseObject_1.BaseObject(new point_1.Point(0, 0));
        this._mario.move(2, 2);
        this._mario.gravity = new vector_1.Vector(0, -2);
        var totalTime = 0;
        while (totalTime < 180) {
            this._previousTime = this._currentTime;
            this._currentTime = this.getCurrentTime();
            var deltaTime = this._currentTime - this._previousTime;
            if (deltaTime > this._tickPerFrame) {
                totalTime += 1;
                deltaTime = this._tickPerFrame;
                this.update(deltaTime);
                this.draw();
            }
        }
    }
    update(deltaTime) {
        var pX = this._mario.position.x + (this._mario.velocity.x * deltaTime);
        var pY = this._mario.position.y + (this._mario.velocity.y * deltaTime);
        this._mario.setPosition(pX, pY);
        var vX = this._mario.velocity.x + (this._mario.gravity.x * deltaTime);
        var vY = this._mario.velocity.y + (this._mario.gravity.y * deltaTime);
        this._mario.move(vX, vY);
    }
    draw() {
        this.log(this._mario.position);
    }
    log(result) {
        console.log('Result ('
            + result.x.toString()
            + ','
            + result.y.toString()
            + ')');
    }
}
exports.GameLoop = GameLoop;
//# sourceMappingURL=gameLoop.js.map