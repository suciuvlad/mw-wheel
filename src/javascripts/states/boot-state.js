import bgCity from "images/bg-city.jpg";
import imgWheelFoot from "images/wheel-foot.png";
import imgWheel from "images/wheel.png";
import imgLogo from "images/img-mbit.png";
import imgSunrays from "images/img-sunrays.png";
import imgBlackChip from "images/img-black-chip.png";
import imgStarFirst from "images/img-star-1.png";
import imgStarSecond from "images/img-star-2.png";

class BootState extends Phaser.State {
  init () {
    this.game.stage.backgroundColor = '#dddddd';
    this.scale.pageAlignHorizontally = true;
    this.stage.disableVisibilityChange = true;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  }

  preload () {
    this.load.image('bgCity', bgCity);
    this.load.image('wheel', imgWheel);
    this.load.image('wheelFoot', imgWheelFoot);
    this.load.image('logo', imgLogo);
    this.load.image('sunrays', imgSunrays);
    this.load.image('blackChip', imgBlackChip);
    this.load.image('imgStarFirst', imgStarFirst);
    this.load.image('imgStarSecond', imgStarSecond);
  }

  create () {
    this.state.start('Game');
  }
}

export default BootState;
