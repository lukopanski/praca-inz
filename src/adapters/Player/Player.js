import { Player as MagentaPlayer } from "@magenta/music/es6/core.js";

export default class Player {
  player;

  constructor() {
    this.player = new MagentaPlayer();
  }

  play() {
    console.log("play");
  }

  pause() {
    console.log("pause");
  }

  resume() {
    console.log("resume");
  }

  stop() {
    console.log("stop");
  }

  getPlayState() {
    // return this.player.getPlayState();
  }
}
