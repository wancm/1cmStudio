/// <reference path="quintus-all.js" />

var Q = Quintus()
    .include("Sprites")
    .setup({ width: 800, height: 600 });

Q.Sprites.extend("Player", {
    init: function (p) {
        this._super(p, {
            asset: "",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            type: Q.SPRITE_FRIENDLY,
            speed: 10
        });
    }
});

Q.load(['Summer_Pignic_Space_Background.png'], function () {
    var background = new Q.Sprite({
        asset: "Summer_Pignic_Space_Background.png",
        x: Q.el.width / 2,
        y: Q.el.height / 2,
        type: Q.SPRITE_NONE // invisible sprite
    });

    Q.gameLoop(function (dt) {
        Q.clear();
        background.render(Q.ctx);
    })
});

