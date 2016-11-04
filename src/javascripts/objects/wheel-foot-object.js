class WheelFootObject extends Phaser.Sprite {
  constructor (game, x, y) {
    super(game, x, y, 'wheelFoot');

    this.anchor.set(0.5);
    this.scale.set(0.65);
    this.game.stage.addChild(this);
  }
}

export default WheelFootObject;
