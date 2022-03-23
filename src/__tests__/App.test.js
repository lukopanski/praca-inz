import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(App);
  });

  afterAll(async () => {
    wrapper.unmount();
  });

  test("should render itself", () => {
    expect(wrapper).toBeTruthy();
  });
});
