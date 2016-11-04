import Q from 'q';

class LogoObject extends Phaser.Sprite {
  constructor (game, x, y) {
    super(game, x, y, 'logo');
    this.game.stage.addChild(this);

    this.anchor.set(0.5);
    this.scale.set(0.2);
  }
}

export default LogoObject;
