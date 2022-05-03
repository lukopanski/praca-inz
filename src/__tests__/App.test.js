import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test.concurrent("should render itself", () => {
    expect(wrapper).toBeTruthy();
  });
});
