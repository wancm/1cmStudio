import { BaseObject } from './baseObject';
import { Point } from './point';
import { Vector } from './vector';

export class GameLoop {

    private _currentTime: number;
    private _previousTime: number;
    private _tickPerFrame: number;
    private _fps: number = 60;
    private _mario: BaseObject;

    constructor() {
        this._currentTime = this.getCurrentTime();

        this._tickPerFrame = this._fps / 1000;
    }

    getCurrentTime(): number {
        return new Date().getTime();
    }

    public run(): void {
        this._mario = new BaseObject(new Point(0, 0));
        this._mario.move(2, 2);
        this._mario.gravity = new Vector(0, -2);

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

    update(deltaTime: number): void {
        var pX = this._mario.position.x + (this._mario.velocity.x * deltaTime);
        var pY = this._mario.position.y + (this._mario.velocity.y * deltaTime);

        this._mario.setPosition(pX, pY);

        var vX = this._mario.velocity.x + (this._mario.gravity.x * deltaTime);
        var vY = this._mario.velocity.y + (this._mario.gravity.y * deltaTime);

        this._mario.move(vX, vY);
    }

    draw(): void {
        this.log(this._mario.position);
    }

    log(result): void {
        console.log('Result ('
            + result.x.toString()
            + ','
            + result.y.toString()
            + ')')
    }
}