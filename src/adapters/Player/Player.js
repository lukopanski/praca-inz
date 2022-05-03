import { Player as MagentaPlayer } from "@magenta/music/es6/core.js";
import { store } from '@/store/store.js';
import PlayerState from "@/common/enums/PlayerState.js";
import { urlToNoteSequence, sequences } from "@magenta/music/es6/core.js";


export default class Player {
  constructor() {
    this.player = new MagentaPlayer();
  }

  async play() {
    if (!store.aiModel.model.isInitialized()) {
      return;
    }

    const sequence = await urlToNoteSequence("./src/assets/c4.mid");
    const quantizedSequence = sequences.quantizeNoteSequence(sequence, 1);
    const continuedSequence = await store.aiModel.continueSequence(quantizedSequence);

    console.log(continuedSequence);

    store.playerState = PlayerState.STARTED;
  }

  pause() {
    store.playerState = PlayerState.PAUSED;
  }

  resume() {
    store.playerState = PlayerState.STARTED;
  }

  stop() {
    store.playerState = PlayerState.STOPPED;
  }
}
