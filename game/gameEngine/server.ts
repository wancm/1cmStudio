import { Framework_Interface } from './app/core/framework/2D/interface';
import { Point } from './app/core/framework/2D/point';
import { Vector } from './app/core/framework/2D/vector';
import { BaseObject } from './app/core/framework/2D/BaseObject';
import { GameLoop } from './app/core/framework/2D/gameLoop';


class Main {

    pointAddVector(): void {
        var p = new Point(1, 0);
        var v = new Vector(2, 3);

        var p2 = p.addVector(v);
        this.log(p2);
    }

    calculateVectorLength(): void {
        var p = new Point(0, -1);
        var i = new Point(1, 1);

        var v = p.substract(i);
        console.log(v.length());
        this.log(v);
    }

    comparisonVectorLength(): void {
        var p = new Point(0, -1);
        var i = new Point(1, 1);
        var c = new Point(2, -1);

        var cp = p.substract(c);
        var ip = p.substract(i);

        console.log(cp.lengthSquare());
        console.log(ip.lengthSquare());
    }

    scaleVectorLength(): void {
        var v = new Vector(3, 4);
        console.log(v.length());

        var double = v.scale(2);
        console.log(double.length());

        var halved = v.scale(1 / 2);
        console.log(halved.length());
    }

    normalizedVector(): void {
        var i = new Point(3, 4);
        var p = new Point(1, 2);

        var v = i.substract(p);
        var n = v.normalizedInPlace();

        this.log(n);
        console.log(n.length());
    }

    synclineVector(): void {
        var r = new Vector(4, 0);
        var d = new Vector(0, -5);

        var v = r.add(d);

        this.log(v);
    }

    objectMove(): void {
        var enemy = new BaseObject(new Point(3, 4));
        var player = new BaseObject(new Point(1, 2));

        // enemy is now moving to player
        enemy.move(player.point.x, player.point.y);

        // calculate distance between enemy and player
        var distance = enemy.vector.length();

        console.log(distance);
    }

    objectBackstab(): void {
        var player = new BaseObject(new Point(2, 2));

        // player move forward vertically
        player.move(4, 4);

        // enemy appear behind player
        var enemy = new BaseObject(new Point(1, 1));        

        var damage = enemy.attack(player);

        console.log(damage);
    }

    log(result): void {
        console.log('Result ('
            + result.x.toString()
            + ','
            + result.y.toString()
            + ')')
    }
}

// var main = new Main();
// main.objectBackstab();

var loop = new GameLoop();
loop.run();

