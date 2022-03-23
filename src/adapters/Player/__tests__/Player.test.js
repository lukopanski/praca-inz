import { describe, expect, test } from "vitest";
import Player from "@/adapters/Player/Player.js";

describe("Player adapter class", () => {
  test("should have all necessary functions from the adapting package", () => {
    const player = new Player();

    expect(player.model.initialize).toBeDefined();
    expect(player.player.play).toBeDefined();
    expect(player.player.pause).toBeDefined();
    expect(player.player.resume).toBeDefined();
    expect(player.player.stop).toBeDefined();
    expect(player.player.getPlayState).toBeDefined();
  });
});
