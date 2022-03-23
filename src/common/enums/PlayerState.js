import Player from "@/adapters/Player/Player.js";

export default class PlayerState {
  static STARTED = Player.prototype.pause;
  static STOPPED = Player.prototype.play;
  static PAUSED = Player.prototype.resume;
}
