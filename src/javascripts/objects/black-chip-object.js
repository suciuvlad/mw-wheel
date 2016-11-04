class BlackChipObject extends Phaser.Sprite {
  constructor (game, x, y) {
    super(game, x, y, 'blackChip');

    this.anchor.set(0.5);
    this.scale.set(0.4);
    this.game.stage.addChild(this);
  }
}

export default BlackChipObject;
