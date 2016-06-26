export class Player {
    private _image: any;
    private _keysDown: Array<number>;
    private _canvas: any;

    constructor(private _canvasWidth: number,
        private _canvasHeight: number) {

        this._image = new Image();
        this._image.src = 'images/swfSpriteSheet.jpg';
    }

    xNumberOfFrames = 4;
    yNumnerOfFrames = 3;

    walkForwardFrame = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
    walkBackwardFrame = [{ x: 3, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }];
    walkLeftFrame = [{ x: 2, y: 1 }, { x: 3, y: 1 }, { x: 0, y: 2 }];
    walkRightFrame = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }];

    public PlayerX = (this._canvasWidth / 2) - (this._image.width / 2);
    public PlayerY = (this._canvasHeight / 2) - (this._image.height / 2);

    currentFrame = { x: 0, y: 0 };
    walkForwad(): void {

    }

    compare(): void {

    }

    tick(canvas, keysDown: Array<number>): void {
        // update user input
        this._keysDown = keysDown;
        this._canvas = canvas;

        this.update();
        this.draw();
    }

    private update(): void {
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

        this._canvas.draw(this._image, this.PlayerX, this.PlayerY);
    }
} 