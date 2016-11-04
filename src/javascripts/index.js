import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from 'states/boot-state';
import GameState from 'states/game-state';
import WinState from 'states/win-state';

import * as u from 'utils';

class Game extends Phaser.Game {
  constructor () {
    super(1900, 1080, Phaser.AUTO);

    u.signIn();

    this.state.add('Boot', BootState, false);
    this.state.add('Game', GameState, false);
    this.state.add('Win', WinState, false);
    this.state.start('Boot');
  }
}

window.game = new Game()
