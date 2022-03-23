import Player from "@/adapters/Player/Player";

const player = new Player();
player.initialize();

export default function usePlayer() {
  return { player };
}
