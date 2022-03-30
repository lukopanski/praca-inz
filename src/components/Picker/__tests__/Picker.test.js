import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import Picker from "@/components/Picker/Picker.vue";

describe("StopButton", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(Picker);
  });

  afterAll(async () => {
    wrapper.unmount();
  });

  test.concurrent("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
