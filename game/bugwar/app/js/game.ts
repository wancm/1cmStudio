/// <reference path="../../typings/enchant.js.d.ts" />

/*

https://gist.github.com/vvakame/5377662

*/

class PathAcessible {
    private _markedTile = [];

    constructor(private _steps: number,
        private _entityX: number, private _entityY: number,
        private _tileWidth: number, private _tileHeight: number) {

        this.markTile(_entityX, _entityY);
    }

    public getPath(): Array<any> {
        return this._markedTile;
    }

    private markTile(x: number, y: number) {
        var rightX = x + this._tileWidth;
        var rightY = y;

        if (!this.isTileMarked(rightX, rightY)) {
            this._markedTile.push({ x: rightX, y: rightY });
        }

        var downX = x;
        var downY = y + this._tileHeight;

        if (!this.isTileMarked(downX, downY)) {
            this._markedTile.push({ x: downX, y: downY });
        }

        var leftX = x + this._tileWidth * -1;
        var leftY = y;

        if (!this.isTileMarked(leftX, leftY)) {
            this._markedTile.push({ x: leftX, y: leftY });
        }

        var topX = x;
        var topY = y  + this._tileHeight * -1;

        if (!this.isTileMarked(topX, topY)) {
            this._markedTile.push({ x: topX, y: topY });
        }
    }

    private isTileMarked(x: number, y: number): boolean {
        var elementPos = this._markedTile.map(function (x) {
            return x.x.toString() + "," + x.y.toString();
        }).indexOf(x.toString() + "," + y.toString());

        return elementPos === -1 ? false : true;
    }
}

class Main {
    _gameWidth: number;
    _gameHeight: number;
    _fps: number;
    _game: any;
    _stage: any;
    _map: any;
    _cursor: any;

    constructor() {

        this._gameWidth = 320;
        this._gameHeight = 320;
        this._fps = 30;

        this._game = new Game(this._gameWidth, this._gameHeight);
        this._game.fps = this._fps;
        this._game.preload(
            {
                'tile': 'app/images/map1.gif',
                'chara': 'app/images/chara_0.png',
                'sound_cursorMove': 'app/sounds/se_ff7_cursormove.mp3'
            }
        );
    }

    onLoad(): void {
        this._game.onload = () => {
            this._stage = new Group();
            this.setMap();
            this.setCursor();
            this.setPlayer();

            this._game.rootScene.addChild(this._stage);

            this.setPad();

            var game = this._game;
            var map = this._map;
            var stage = this._stage;
            var cursor = this._cursor;

            var label = new Label("test");
            label.x = 260;
            label.y = 300;
            label.opacity = 0.5;
            this._game.rootScene.addChild(label);

            this._game.rootScene.addEventListener('enterframe', function (e) {
                label.text = cursor.x.toString() + "," + cursor.y.toString();

                var x = Math.min((game.width - 16) / 2 - cursor.x, 0);
                var y = Math.min((game.height - 16) / 2 - cursor.y, 0);
                x = Math.max(game.width, x + map.width) - map.width;
                y = Math.max(game.height, y + map.height) - map.height;
                stage.x = x;
                stage.y = y;
            });
        }
    }

    setMap(): void {
        var map = new Map(16, 16);
        map.image = this._game.assets['tile'];

        map.loadData([
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
            [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],

        ]);

        var colMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        map.collisionData = colMap;

        this._map = map;
        this._stage.addChild(this._map);
    }

    setPad(): void {
        var pad = new Pad();
        pad.x = 0;
        pad.y = 220;
        this._game.rootScene.addChild(pad);
    }

    setPlayer(): void {
        var player = new Sprite(32, 32);
        player.x = 32;
        player.y = 32;
        player.name = "p1";

        var image = new Surface(96, 128);
        image.draw(this._game.assets['chara'], 6 * 32, 0, 96, 128, 0, 0, 96, 128);
        player.image = image;

        player.isMoving = false;
        player.direction = 0;
        player.walk = 1;
        var game = this._game;

        var cursor = this._cursor;
        var focus = "";

        var stage = this._stage;
        var pathTileCollection = [];
        player.addEventListener('enterframe', function () {
            this.frame = this.direction * 3 + this.walk;

            if (game.frame % 3 === 0) {
                this.walk++;
                this.walk %= 3;
            }

            // Detect if sprite collides with sprite2
            if (cursor.within(this, 1)) {
                if (pathTileCollection.length === 0) {
                    if (focus != this.name) {
                        focus = this.name;

                        var accessible = new PathAcessible(2, this.x, this.y, 32, 32);
                        var path = accessible.getPath();

                        for (var i = 0; i < path.length; i++) {
                            var pathTile = new Sprite(32, 32);
                            pathTile.x = path[i].x;
                            pathTile.y = path[i].y;

                            var surface = new Surface(32, 32);
                            surface.context.beginPath();
                            surface.context.globalAlpha = 0.2;
                            surface.context.fillRect(0, 0, 32, 32);
                            pathTile.image = surface;

                            pathTileCollection.push(pathTile);
                        }
                    }
                }

                for (var i = 0; i < pathTileCollection.length; i++) {
                    stage.addChild(pathTileCollection[i]);
                }

            } else {
                for (var i = 0; i < pathTileCollection.length; i++) {
                    stage.removeChild(pathTileCollection[i]);
                }
            }
        });

        this._stage.addChild(player);

        var enemy = new Sprite(32, 32);
        enemy.x = 32 * 3;
        enemy.y = 32 * 3;
        var image = new Surface(96, 128);
        image.draw(this._game.assets['chara'], 3 * 32, 0, 96, 128, 0, 0, 96, 128);
        enemy.image = image;

        enemy.isMoving = false;
        enemy.direction = 0;
        enemy.walk = 1;

        enemy.addEventListener('enterframe', function () {
            this.frame = this.direction * 3 + this.walk;

            if (game.frame % 3 === 0) {
                this.walk++;
                this.walk %= 3;
            }
        });

        this._stage.addChild(enemy);
    }

    setCursor(): void {
        var cursor = new Sprite(32, 32);
        cursor.x = 0;
        cursor.y = 0;

        var surface = new Surface(32, 32);
        surface.context.beginPath();
        surface.context.strokeRect(0, 0, 32, 32);
        surface.context.globalAlpha = 0.2;
        surface.context.fillRect(0, 0, 32, 32);
        cursor.image = surface;

        cursor.isMoving = false;
        cursor.direction = 0;

        var game = this._game;
        var map = this._map;

        cursor.addEventListener('enterframe', function () {
            if (this.isMoving) {
                this.moveBy(this.vx, this.vy);

                if ((this.vx && (this.x - 32) % 32 == 0) || (this.vy && this.y % 32 == 0)) {
                    this.isMoving = false;
                }
            } else {
                this.vx = this.vy = 0;
                if (game.input.left) {
                    this.direction = 1;
                    this.vx = -4;
                } else if (game.input.right) {
                    this.direction = 2;
                    this.vx = 4;
                } else if (game.input.up) {
                    this.direction = 3;
                    this.vy = -4;
                } else if (game.input.down) {
                    this.direction = 0;
                    this.vy = 4;
                }
                if (this.vx || this.vy) {
                    var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 32 : 0) + 32;
                    var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 32 : 0) + 32;
                    if (0 != x && x < map.width && 0 != y && y < map.height && !map.hitTest(x, y)) {
                        this.isMoving = true;

                        if (this.x % 32 == 0
                            || this.y % 32 == 0) {
                            game.assets['sound_cursorMove'].play();
                        }

                        arguments.callee.call(this);
                    }
                }
            }
        });

        this._cursor = cursor;
        this._stage.addChild(this._cursor);
    }

    start(): void {
        this._game.start();
    }
}

enchant();

window.onload = function () {
    var main = new Main();
    main.onLoad();
    main.start();
}
