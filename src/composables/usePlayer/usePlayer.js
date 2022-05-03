import Player from "@/adapters/Player/Player";

const player = new Player();

export default function usePlayer() {
  return { player };
}
