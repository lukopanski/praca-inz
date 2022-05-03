import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import PauseButton from "@/components/PauseButton/PauseButton.vue";

describe("PauseButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PauseButton);
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
