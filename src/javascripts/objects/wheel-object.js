import Q from 'q';

class WheelObject extends Phaser.Sprite {
  constructor (game, x, y) {
    super(game, x, y, 'wheel');

    this.anchor.set(0.5);
    this.scale.set(0.65);
    this.game.stage.addChild(this);
  }

  spin (rounds, degrees) {
    var dfd = Q.defer();


    const spinTween = this.game.add.tween(this).to({
        angle: 360 * rounds + degrees
    }, 1000, Phaser.Easing.Quadratic.Out, true);

    spinTween.onComplete.add(() => dfd.resolve());

    return dfd.promise;
  }
}

export default WheelObject;
