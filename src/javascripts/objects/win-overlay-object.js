class WinOverlayObject extends Phaser.Graphics {
  constructor (game, x, y) {
    super(game, x, y, 'overlay');

    this.beginFill(0x000000, 0.5);

    this.drawRect(0, 0, game.width, game.height);

    this.endFill();
    this.generateTexture();

    this.inputEnabled = true;

    this.game.stage.addChild(this);
    this.alpha = 0;
    this.game.add.tween(this)
      .to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, true);
  }
}

export default WinOverlayObject;
