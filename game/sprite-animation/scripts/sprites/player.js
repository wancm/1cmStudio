"use strict";
var Player = (function () {
    function Player(_canvasWidth, _canvasHeight) {
        this._canvasWidth = _canvasWidth;
        this._canvasHeight = _canvasHeight;
        this.xNumberOfFrames = 4;
        this.yNumnerOfFrames = 3;
        this.walkForwardFrame = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
        this.walkBackwardFrame = [{ x: 3, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];
        this.walkLeftFrame = [{ x: 2, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }];
        this.walkRightFrame = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }];
        this.PlayerX = (this._canvasWidth / 2) - (this._image.width / 2);
        this.PlayerY = (this._canvasHeight / 2) - (this._image.height / 2);
        this.currentFrame = { x: 0, y: 0 };
        this._image = new Image();
        this._image.src = 'images/swfSpriteSheet.jpg';
    }
    Player.prototype.walkForwad = function () {
    };
    Player.prototype.compare = function () {
    };
    Player.prototype.tick = function (canvas, keysDown) {
        // update user input
        this._keysDown = keysDown;
        this._canvas = canvas;
        this.update();
        this.draw();
    };
    Player.prototype.update = function () {
        // left
        if (this._keysDown[37]) {
            this.PlayerX -= 10;
        }
        // down
        if (this._keysDown[38]) {
            this.PlayerY -= 10;
        }
        // right
        if (this._keysDown[39]) {
            this.PlayerX += 10;
        }
        // up
        if (this._keysDown[40]) {
            this.PlayerY += 10;
        }
    };
    Player.prototype.draw = function () {
        /*
            context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

            img	Source image object	Sprite sheet
            sx	Source x	Frame index times frame width
            sy	Source y	0
            sw	Source width	Frame width
            sh	Source height	Frame height
            dx	Destination x	0
            dy	Destination y	0
            dw	Destination width	Frame width
            dh	Destination height	Frame height
         */
        this._canvas.draw(this._image, this.PlayerX, this.PlayerY);
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map