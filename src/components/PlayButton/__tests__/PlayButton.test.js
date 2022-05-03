import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import PlayButton from "@/components/PlayButton/PlayButton.vue";

describe("PlayButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PlayButton);
  });

  afterAll(() => {
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
