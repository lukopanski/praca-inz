import { Player as MagentaPlayer } from "@magenta/music/es6/core.js";
import { MusicVAE } from "@magenta/music/es6/music_vae.js";
import { checkpointUrl } from "@/common/magenta.js";

export default class Player {
  player;
  model;

  constructor() {
    this.player = new MagentaPlayer();
    this.model = new MusicVAE(checkpointUrl);
  }

  async initialize() {
    await this.model.initialize();
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
    return this.player.getPlayState();
  }
}
