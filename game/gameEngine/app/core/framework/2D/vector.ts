import { Framework_Interface } from './interface';
import { Point } from './point';

export class Vector implements Framework_Interface.IVector {
    constructor(public x: number, public y: number) { }

    /* Method to add up 2 vector, use when charactor move syncline */
    public add(vector: Framework_Interface.IVector): Vector {
        return new Vector(
            this.x + vector.x,
            this.y + vector.y
        );
    }

    /* Method use to scale the vector of the object.
       ex.(if I want to double up the speed, I wil just invoke vector.scale(2) ) */
    public scale(scale: number): Vector {
        return new Vector(
            this.x * scale,
            this.y * scale
        );
    }

    /* Method use to calcualte the disance of the vector */
    public length(): number {
        return Math.sqrt(this.lengthSquare());
    }

    public lengthSquare(): number {
        return (this.x * this.x) + (this.y * this.y);
    }

    /* Method use to getting where (which direction) is the character is looking at. Vector hat*/
    public normalizedInPlace(): Vector {
        var length = this.length();

        // formula: vector / distance
        return new Vector(this.x / length, this.y / length);
    }

    /* Method use to calcualte whether is it backstabbing situation*/
    public dotProduct(targetNormalizeInPlaceVector: Framework_Interface.IVector): number {
        return (this.x * targetNormalizeInPlaceVector.x) + (this.y * targetNormalizeInPlaceVector.y);
    }
}