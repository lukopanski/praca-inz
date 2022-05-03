import { MusicRNN } from "@magenta/music/es6/music_rnn";
import { store } from '@/store/store.js';

export default class AIModel {
  constructor() {
    this.model = new MusicRNN(store.checkpoint);
  }

  async initialize() {
    await this.model.initialize();
  }

  async continueSequence(sequence) {
    store.sequence = await this.model.continueSequence(sequence, 120);
  }
}
