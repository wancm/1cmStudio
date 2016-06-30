import { Framework_Interface } from './interface';
import { Point } from './point';
import { Vector } from './vector';

export class BaseObject {

    public point: Point;
    public vector: Vector;
    public _gravity: Vector;

    constructor(point: Point) {
        this.point = point;
        this.vector = new Vector(point.x, point.y);
    }

    public getAbsoluteOrigin(): Point {
        return this.point;
    }

    public move(x: number, y: number) {
        this.vector.x = x;
        this.vector.y = y;
    }

    public setPosition(x: number, y: number) {
        this.point.x = x;
        this.point.y = y;
    }

    get position() {
        return this.point;
    }

    get velocity() {
        return this.vector;
    }

    set gravity(value: Vector) {
        this._gravity = value;
    }

    get gravity() {
        return this._gravity;
    }

    public attack(targeEntity: BaseObject): number {

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