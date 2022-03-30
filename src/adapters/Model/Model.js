import { MusicRNN } from "@magenta/music/es6/music_vae.js";
import { checkpointUrl } from "@/common/magenta.js";

export default class Model {
  model;

  constructor() {
    this.model = new MusicRNN(checkpointUrl);
  }

  async initialize() {
    await this.model.initialize();
  }
}
