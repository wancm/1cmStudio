import { Framework_Interface } from './interface';
import { Vector } from './vector';

export class Point implements Framework_Interface.IPoint {

    public vector: Vector;

    constructor(public x: number, public y: number) {
        this.vector = new Vector(x, y);
    }

    public move(vector: Framework_Interface.IVector) {
        this.vector.x = vector.x;
        this.vector.y = vector.y;
    }

    public addVector(vector: Framework_Interface.IVector): Point {
        return new Point(
            this.x + vector.x,
            this.y + vector.y
        )
    }

    public substract(point: Framework_Interface.IPoint): Vector {
        return new Vector(
            this.x - point.x,
            this.y - point.y
        );
    }

    public getVector(point: Framework_Interface.IPoint): Vector {
        return this.substract(point);
    }
}