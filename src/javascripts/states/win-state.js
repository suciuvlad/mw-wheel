import WheelObject from 'objects/wheel-object';
import WheelFootObject from 'objects/wheel-foot-object';
import LogoObject from 'objects/logo-object';


class WinState extends Phaser.State {
  init () {
    this.canSpin = true;
  }

  preload () {
  }

  create () {
    let center = { x: this.game.world.centerX, y: this.game.world.centerY }

    this.logo = new LogoObject(this.game, center.x, center.y);
    this.wheel = new WheelObject(this.game, center.x, center.y);
    this.wheelFoot = new WheelFootObject(this.game, center.x, center.y + 346);

    this.wheelGroup = this.game.add.group();
    this.wheelGroup.add(this.wheel);
    this.wheelGroup.add(this.wheelFoot);
    this.wheelGroup.add(this.logo);
    this.wheelGroup.y = -50;
  }
}

export default WinState;
