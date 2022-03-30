import { describe, expect, test, vi } from "vitest";
import Player from "@/adapters/Player/Player.js";
import { Player as MagentaPlayer } from "@magenta/music/es6/core.js";

describe("Player adapter class", () => {
  test.concurrent(
    "should have all necessary functions from the adapting module",
    () => {
      vi.spyOn(MagentaPlayer);

      const player = new Player();

      expect(player.player.play).toBeDefined();
      expect(player.player.pause).toBeDefined();
      expect(player.player.resume).toBeDefined();
      expect(player.player.stop).toBeDefined();
      expect(player.player.getPlayState).toBeDefined();
    }
  );
});
