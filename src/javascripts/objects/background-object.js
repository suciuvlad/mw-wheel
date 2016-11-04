class BackgroundObject extends Phaser.Sprite {
  constructor (game) {
    super(game, 0, 0, 'bgCity');
    this.game.stage.addChildAt(this, 0);
    this.scale.set(1.3);

    game.add.tween(this.scale)
      .to({x: 1, y: 1}, 600, Phaser.Easing.Linear.None, true);
  }
}

export default BackgroundObject;
