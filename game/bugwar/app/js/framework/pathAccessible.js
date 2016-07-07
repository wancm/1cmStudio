"use strict";
var PathAcessible = (function () {
    function PathAcessible(_steps, _entityX, _entityY, _tileWidth, _tileHeight) {
        this._steps = _steps;
        this._entityX = _entityX;
        this._entityY = _entityY;
        this._tileWidth = _tileWidth;
        this._tileHeight = _tileHeight;
        this._markedTile = [];
    }
    PathAcessible.prototype.getPath = function () {
        return this._markedTile;
    };
    PathAcessible.prototype.markTile = function (x, y) {
        var rightX = x + this._tileWidth;
        var rightY = y;
        if (!this.isTileMarked(rightX, rightY)) {
            this._markedTile.push({ x: rightX, y: rightY });
        }
        var downX = x;
        var downY = y + this._tileHeight * -1;
        if (!this.isTileMarked(downX, downY)) {
            this._markedTile.push({ x: downX, y: downY });
        }
    };
    PathAcessible.prototype.isTileMarked = function (x, y) {
        var elementPos = this._markedTile.map(function (x) {
            return x.x.toString() + "," + x.y.toString();
        }).indexOf(x.toString() + "," + y.toString());
        return elementPos === -1 ? true : false;
    };
    return PathAcessible;
}());
exports.PathAcessible = PathAcessible;
//# sourceMappingURL=pathAccessible.js.map