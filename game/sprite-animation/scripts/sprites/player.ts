interface SpriteFrame {
    x: number;
    y: number;
}

export class Player {
    private _image: any;
    private _keysDown: Array<number>;
    private _canvas: any;
    public PlayerX: number;
    public PlayerY: number;

    private _tickCount: number = 0;
    private _ticksPerFrame: number = 3;

    xNumberOfFrames = 4;
    yNumnerOfFrames = 3;

    _frameWidth: number;
    _frameHeight: number;

    constructor(private _canvasWidth: number,
        private _canvasHeight: number) {

        this._image = new Image();
        this._image.src = 'images/swfSpriteSheet.jpg';

        this.PlayerX = (this._canvasWidth / 2) - (this._image.width / 2);
        this.PlayerY = (this._canvasHeight / 2) - (this._image.height / 2);

        this._frameWidth = this._image.width / this.xNumberOfFrames;
        this._frameHeight = this._image.height / this.yNumnerOfFrames;

        console.log(this._frameWidth);
        console.log(this._frameHeight);
    }

    walkForwardFrame: Array<SpriteFrame> = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
    walkBackwardFrame: Array<SpriteFrame> = [{ x: 3, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];
    walkLeftFrame: Array<SpriteFrame> = [{ x: 2, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }];
    walkRightFrame: Array<SpriteFrame> = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }];

    currentSpriteCoordinate = { x: 0, y: 0, sx: 0, sy: 0 };
    walkForward(): void {
        if (!this.nextFrame()) return;

        var frame = this.walkForwardFrame[this.getNextFrameIndex(this.walkForwardFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }

    walkBackward(): void {
        if (!this.nextFrame()) return;

        var frame = this.walkBackwardFrame[this.getNextFrameIndex(this.walkBackwardFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }

    walkLeft(): void {
        if (!this.nextFrame()) return;

        var frame = this.walkLeftFrame[this.getNextFrameIndex(this.walkLeftFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }

    walkRight(): void {
        if (!this.nextFrame()) return;

        var frame = this.walkRightFrame[this.getNextFrameIndex(this.walkRightFrame)];
        this.updateCurrentFrameCoordinate(frame);
    }

    updateCurrentFrameCoordinate(frame: SpriteFrame): void {
        this.currentSpriteCoordinate.x = frame.x;
        this.currentSpriteCoordinate.y = frame.y;
        this.currentSpriteCoordinate.sx = frame.x * this._frameWidth;
        this.currentSpriteCoordinate.sy = frame.y * this._frameHeight;
    }

    getNextFrameIndex(frames: Array<SpriteFrame>): number {
        for (var i = 0; i < frames.length; i++) {
            // check if currentFrame are within current action frame sets
            if (frames[i].x == this.currentSpriteCoordinate.x
                && frames[i].y == this.currentSpriteCoordinate.y) {
                if (i >= frames.length - 1) return 0; // return first frame index                
                return i + 1; // return next frame index
            }
        }

        return 0;
    }

    private nextFrame(): boolean {
        if (this._tickCount > this._ticksPerFrame) {
            this._tickCount = 0; // reset tick count
            return true;
        }

        return false;
    }

    tick(canvas, keysDown: Array<number>): void {
        this._tickCount++;

        // update user input
        this._keysDown = keysDown;
        this._canvas = canvas;

        this.update();
        this.draw();
    }

    private update(): void {
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

    draw(): void {
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

        this._canvas.drawImage(this._image,
            this.currentSpriteCoordinate.sx, this.currentSpriteCoordinate.sy,
            this._frameWidth, this._frameHeight,
            this.PlayerX, this.PlayerY,
            this._frameWidth, this._frameHeight);
    }

    // clamp to a range
    clamp(x, min, max): number {
        return x < min ? min : (x > max ? max : x);
    }
}
