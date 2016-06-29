"use strict";
class Player {
    constructor(_canvasWidth, _canvasHeight) {
        this._canvasWidth = _canvasWidth;
        this._canvasHeight = _canvasHeight;
        this._tickCount = 0;
        this._ticksPerFrame = 3;
        this.xNumberOfFrames = 4;
        this.yNumnerOfFrames = 3;
        this.walkForwardFrame = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
        this.walkBackwardFrame = [{ x: 3, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];
        this.walkLeftFrame = [{ x: 2, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }];
        this.walkRightFrame = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }];
        this.currentSpriteCoordinate = { x: 0, y: 0, sx: 0, sy: 0 };
        this._image = new Image();
        this._image.src = 'images/swfSpriteSheet.jpg';
        this.PlayerX = (this._canvasWidth / 2) - (this._image.width / 2);
        this.PlayerY = (this._canvasHeight / 2) - (this._image.height / 2);
        this._frameWidth = this._image.width / this.xNumberOfFrames;
        this._frameHeight = this._image.height / this.yNumnerOfFrames;
        console.log(this._frameWidth);
        console.log(this._frameHeight);
    }
    walkForward() {
        if (!this.nextFrame())
            return;
        var frame = this.walkForwardFrame[this.getNextFrameIndex(this.walkForwardFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }
    walkBackward() {
        if (!this.nextFrame())
            return;
        var frame = this.walkBackwardFrame[this.getNextFrameIndex(this.walkBackwardFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }
    walkLeft() {
        if (!this.nextFrame())
            return;
        var frame = this.walkLeftFrame[this.getNextFrameIndex(this.walkLeftFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }
    walkRight() {
        if (!this.nextFrame())
            return;
        var frame = this.walkRightFrame[this.getNextFrameIndex(this.walkRightFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }
    updateCurrentFrameCoordinate(frame) {
        this.currentSpriteCoordinate.x = frame.x;
        this.currentSpriteCoordinate.y = frame.y;
        this.currentSpriteCoordinate.sx = frame.x * this._frameWidth;
        this.currentSpriteCoordinate.sy = frame.y * this._frameHeight;
    }
    getNextFrameIndex(frames) {
        for (var i = 0; i < frames.length; i++) {
            // check if currentFrame are within current action frame sets
            if (frames[i].x == this.currentSpriteCoordinate.x
                && frames[i].y == this.currentSpriteCoordinate.y) {
                if (i >= frames.length - 1)
                    return 0; // return first frame index                
                return i + 1; // return next frame index
            }
        }
        return 0;
    }
    nextFrame() {
        if (this._tickCount > this._ticksPerFrame) {
            this._tickCount = 0; // reset tick count
            return true;
        }
        return false;
    }
    tick(canvas, keysDown) {
        this._tickCount++;
        // update user input
        this._keysDown = keysDown;
        this._canvas = canvas;
        this.update();
        this.draw();
    }
    update() {
        // left
        if (this._keysDown[37]) {
            this.walkLeft();
            this.PlayerX -= 10;
        }
        // down
        if (this._keysDown[38]) {
            this.walkBackward();
            this.PlayerY -= 10;
        }
        // right
        if (this._keysDown[39]) {
            this.walkRight();
            this.PlayerX += 10;
        }
        // up
        if (this._keysDown[40]) {
            this.walkForward();
            this.PlayerY += 10;
        }
    }
    draw() {
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
        this.PlayerX = this.clamp(this.PlayerX, 0, this._canvasWidth - this._frameWidth);
        this.PlayerY = this.clamp(this.PlayerY, 0, this._canvasHeight - this._frameHeight);
        this._canvas.drawImage(this._image, this.currentSpriteCoordinate.sx, this.currentSpriteCoordinate.sy, this._frameWidth, this._frameHeight, this.PlayerX, this.PlayerY, this._frameWidth, this._frameHeight);
    }
    // clamp to a range
    clamp(x, min, max) {
        return x < min ? min : (x > max ? max : x);
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map