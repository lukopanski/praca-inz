import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test, vi } from "vitest";
import StopButton from "@/components/StopButton/StopButton.vue";

describe("StopButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(StopButton);
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
