export class PathAcessible {
    _markedTile = [];

    constructor(private _steps: number,
        private _entityX: number, private _entityY: number,
        private _tileWidth: number, private _tileHeight: number) {
    }

    public getPath(): Array<any> {
        return this._markedTile;
    }

    markTile(x: number, y: number) {
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
    }

    isTileMarked(x: number, y: number): boolean {
        var elementPos = this._markedTile.map(function (x) {
            return x.x.toString() + "," + x.y.toString();
        }).indexOf(x.toString() + "," + y.toString());

        return elementPos === -1 ? true : false;
    }
}