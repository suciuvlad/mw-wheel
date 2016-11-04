import WheelObject from 'objects/wheel-object';
import WheelFootObject from 'objects/wheel-foot-object';
import LogoObject from 'objects/logo-object';
import BackgroundObject from 'objects/background-object';
import WinOverlayObject from 'objects/win-overlay-object';
import BlackChipObject from 'objects/black-chip-object';
import SunraysObject from 'objects/sunrays-object';


const prizes = ["50% Deposit Bonus", "25 Free Spins", "10% Cashback",
  "Convert MLP to Bitcoins", "50% Deposit Bonus", "25 Free Spins",
  "50% Deposit Bonus", "25 Free Spins", "10% Cashback",
  "Convert MLP to Bitcoins", "50% Deposit Bonus", "25 Free Spins"];

class BootState extends Phaser.State {
  init () {
    this.canSpin = true;
  }

  preload () {
  }

  create () {
    let center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.center = center;

    console.log(this.game.world);

    this.backgroundObject = new BackgroundObject(this.game);

    this.logo = new LogoObject(this.game, center.x, center.y);
    this.wheel = new WheelObject(this.game, center.x, center.y);
    this.wheelFoot = new WheelFootObject(this.game, center.x, center.y + 408);

    this.wheelGroup = this.game.add.group();

    this.wheelGroup.add(this.wheel);
    this.wheelGroup.add(this.wheelFoot);
    this.wheelGroup.add(this.logo);

    this.wheelGroup.y = -this.wheel.y;
    this.game.add.tween(this.wheelGroup).to({ y: -55 },
      1400, Phaser.Easing.Bounce.Out, true)

    this.game.input.onDown.add(this.spin, this);
  }

  spin () {
    if (!this.canSpin) return;
    this.canSpin = false;

    const rounds = this.game.rnd.between(2, 4);
    const degrees = this.game.rnd.between(0, 360);
    const prize = prizes.length - 1 - Math.floor(degrees / (360 / prizes.length));

    console.log(prizes[prize]);

    this.wheel.spin(rounds, degrees).then(() => {
      this.canSpin = true;
      this.handleWin();
    });
  }

  handleWin () {
    this.game.add.tween(this.wheelGroup).to({x: 500, y: 470}, 400, Phaser.Easing.Linear.None, true);
    this.game.add.tween(this.wheelGroup.scale).to({ x: .5, y: .5 },
      400, Phaser.Easing.Linear.None, true)

    this.game.add.tween(this.wheelGroup).to({x: 1200}, 400, Phaser.Easing.Linear.None, true);
    this.bgOverlay = new WinOverlayObject(this.game, 0, 0);

    this.blackChip = new BlackChipObject(this.game, this.center.x, this.game.world.height);

    this.game.add.tween(this.blackChip)
      .to({ y: 230 }, 500, Phaser.Easing.Linear.None, true)
      .onComplete.add(() => {
        this.game.add
          .tween(this.blackChip.scale).to({ x: .45, y: .45 }, 1000, Phaser.Easing.Linear.None, true)
          .yoyo(true, 0)
          .loop(true);

        this.sunRays = new SunraysObject(this.game, this.blackChip.x, this.blackChip.y, this.blackChip.renderOrderID - 2);
        const starEmitter = game.add.emitter(this.game.world.centerX, this.blackChip.y - (this.blackChip.height / 2), 30);
        starEmitter.makeParticles(['imgStarFirst', 'imgStarSecond']);
        starEmitter.maxParticleScale = 0.35;
        starEmitter.minParticleScale = 0.1;
        starEmitter.minRotation = 0;
        starEmitter.gravity = 50;
        starEmitter.minRotation = 40;
        starEmitter.start(false, 2500, 60, -1);

        const chipsEmitter = game.add.emitter(game.world.centerX, 0, 8);
        chipsEmitter.width = game.world.width;
        chipsEmitter.makeParticles('blackChip');
        chipsEmitter.minParticleScale = 0.1;
        chipsEmitter.maxParticleScale = 0.25;
        chipsEmitter.setYSpeed(300, 500);
        chipsEmitter.setXSpeed(-5, 5);
        chipsEmitter.start(false, 1600, 300, -1);
      })


  }
}

export default BootState;
