import { afterAll, beforeEach, describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Player from "@/components/Player/Player.vue";

describe("Player", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Player);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test.concurrent("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
