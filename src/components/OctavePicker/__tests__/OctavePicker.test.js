import { shallowMount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, test } from "vitest";
import NotePicker from "@/components/NotePicker/NotePicker.vue";

describe("NotePicker", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NotePicker);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test.concurrent("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
