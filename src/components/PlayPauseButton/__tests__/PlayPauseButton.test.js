import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import PlayPauseButton from "@/components/PlayPauseButton/PlayPauseButton.vue";

describe("PlayPauseButton", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(PlayPauseButton);
  });

  afterAll(async () => {
    wrapper.unmount();
  });

  test.concurrent("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });

  test.concurrent("should handle click event", () => {
    expect(wrapper.trigger("click")).toBeTruthy();
  });
});
