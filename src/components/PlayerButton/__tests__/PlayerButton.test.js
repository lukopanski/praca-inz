import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import PlayerButton from "@/components/PlayerButton/PlayerButton.vue";

describe("StopButton", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(PlayerButton);
  });

  afterAll(async () => {
    wrapper.unmount();
  });

  test.concurrent("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
