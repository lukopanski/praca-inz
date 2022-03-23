import { afterAll, beforeEach, describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Player from "@/components/Player/Player.vue";

describe("Player", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(Player);
  });

  afterAll(async () => {
    wrapper.unmount();
  });

  test("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
