"use strict";
const point_1 = require('./app/core/framework/2D/point');
const vector_1 = require('./app/core/framework/2D/vector');
const BaseObject_1 = require('./app/core/framework/2D/BaseObject');
const gameLoop_1 = require('./app/core/framework/2D/gameLoop');
class Main {
    pointAddVector() {
        var p = new point_1.Point(1, 0);
        var v = new vector_1.Vector(2, 3);
        var p2 = p.addVector(v);
        this.log(p2);
    }
    calculateVectorLength() {
        var p = new point_1.Point(0, -1);
        var i = new point_1.Point(1, 1);
        var v = p.substract(i);
        console.log(v.length());
        this.log(v);
    }
    comparisonVectorLength() {
        var p = new point_1.Point(0, -1);
        var i = new point_1.Point(1, 1);
        var c = new point_1.Point(2, -1);
        var cp = p.substract(c);
        var ip = p.substract(i);
        console.log(cp.lengthSquare());
        console.log(ip.lengthSquare());
    }
    scaleVectorLength() {
        var v = new vector_1.Vector(3, 4);
        console.log(v.length());
        var double = v.scale(2);
        console.log(double.length());
        var halved = v.scale(1 / 2);
        console.log(halved.length());
    }
    normalizedVector() {
        var i = new point_1.Point(3, 4);
        var p = new point_1.Point(1, 2);
        var v = i.substract(p);
        var n = v.normalizedInPlace();
        this.log(n);
        console.log(n.length());
    }
    synclineVector() {
        var r = new vector_1.Vector(4, 0);
        var d = new vector_1.Vector(0, -5);
        var v = r.add(d);
        this.log(v);
    }
    objectMove() {
        var enemy = new BaseObject_1.BaseObject(new point_1.Point(3, 4));
        var player = new BaseObject_1.BaseObject(new point_1.Point(1, 2));
        // enemy is now moving to player
        enemy.move(player.point.x, player.point.y);
        // calculate distance between enemy and player
        var distance = enemy.vector.length();
        console.log(distance);
    }
    objectBackstab() {
        var player = new BaseObject_1.BaseObject(new point_1.Point(2, 2));
        // player move forward vertically
        player.move(4, 4);
        // enemy appear behind player
        var enemy = new BaseObject_1.BaseObject(new point_1.Point(1, 1));
        var damage = enemy.attack(player);
        console.log(damage);
    }
    log(result) {
        console.log('Result ('
            + result.x.toString()
            + ','
            + result.y.toString()
            + ')');
    }
}
// var main = new Main();
// main.objectBackstab();
var loop = new gameLoop_1.GameLoop();
loop.run();
//# sourceMappingURL=server.js.map