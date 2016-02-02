enchant();

window.onload = function() {
    var game = new Game(320, 320);
    game.onload = function() {

        var lblTouchPos = new Label();
        lblTouchPos.text = '';

        game.rootScene.addEventListener('touchstart', function(e) {

            lblTouchPos.text = 'X:' + e.localX + ',' + 'Y:' + e.localY;

        });

        game.rootScene.addChild(lblTouchPos);

    };
    game.start();
};