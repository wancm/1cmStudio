(function () {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel
    // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
} ());

(function () {
    var coin,
        coinImage,
        canvas;

    function gameLoop() {

        window.requestAnimationFrame(gameLoop);

        coin.update();
        coin.render();
    }

    // reference: http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/
    function sprite(options) {

        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.update = function () {
            /*
            Update
    
            We need a method so we can update the position of the sprite sheet's bound rectangle. Let's call it... update. 
            We need also need to keep track of where the animation is so let's create some properties:
    
            frameIndex: The current frame to be displayed
            tickCount: The number updates since the current frame was first displayed
            ticksPerFrame: The number updates until the next frame should be displayed
                We could just increment the frame index every time we call the update method, but when running a game at 60 frames per second 
                we might want the animation to run at a slower fps. 
                Tracking the ticks let's use delay the animation speed. 
                For example we could run the sprite animation at 15 fps by setting the ticksPerFrame to 4 on game loop running at 60 fps.
    
            Each time the update method is called, the tick count is incremented. 
            If the tick count reaches the ticks per frame the frame index increments the tick count resets to zero.
            */

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        }

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            /*
            DrawImage Method
    
            The key to creating sprites from one image is that the context's drawImage method allows us to render a cropped section of the source image to the canvas.
    
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

            /*
            The render method can now move the bounding rectangle of the source sprite sheet based on the frame index to be displayed 
            by replacing the sprite width with the frame width: that.width is replaced with that.width / numberOfFrames.
             */

            /*  
            Draw the animation
            context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
            */
            that.context.drawImage(
            /*img*/that.image, // source image object
            /*sx*/frameIndex * that.width / numberOfFrames, // Source x:	Frame index times frame width
            /*sy*/0, // Source y:
            /*sw*/that.width / numberOfFrames, // Source width: 
            /*sh*/that.height, // Source height: 
            /*dx*/0, // Destination x: 
            /*dy*/0, // Destination y: 
            /*dw*/that.width / numberOfFrames, // Destination width: 
            /*dh*/that.height); // Destination height: 
        };

        return that;
    }

    // Get canvas
    canvas = document.getElementById("coinAnimation");
    canvas.width = 100;
    canvas.height = 100;

    // Create sprite sheet
    coinImage = new Image();

    // Create sprite
    coin = sprite({
        context: canvas.getContext("2d"),
        width: 1000,
        height: 100,
        image: coinImage,
        numberOfFrames: 10,
        ticksPerFrame: 4
    });

    // Load sprite sheet
    coinImage.src = "images/coin-sprite-animation-sprite-sheet.png";
    // Start the game loop as soon as the sprite sheet is loaded
    coinImage.addEventListener("load", gameLoop);
})();

