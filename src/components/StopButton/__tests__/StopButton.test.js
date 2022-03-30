import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import StopButton from "@/components/StopButton/StopButton.vue";

describe("StopButton", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(StopButton);
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
