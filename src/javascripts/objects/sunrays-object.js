class SunraysObject extends Phaser.Sprite {
  constructor (game, x, y, index) {
    super(game, x, y, 'sunrays');

    this.anchor.set(0.5);
    this.scale.set(0.4);
    this.game.stage.addChildAt(this, index);
    this.alpha = 0;
    this.game.add.tween(this)
      .to({ alpha: 1 }, 300, Phaser.Easing.Linear.None, true);

    this.game.add.tween(this)
      .to({ angle: 360 }, 10000, Phaser.Easing.Linear.None, true)
      .loop(true);
  }
}

export default SunraysObject;
