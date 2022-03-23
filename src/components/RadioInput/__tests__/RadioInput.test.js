import { afterAll, beforeEach, describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import RadioInput from "@/components/RadioInput/RadioInput.vue";
import useNotes from "@/composables/notes/notes";
import { note } from "@/common/regex/noteValidator.js";

const { notes } = useNotes();

describe("RadioInput", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(RadioInput, {
      props: {
        value: notes.value[Math.floor(Math.random() * notes.value.length)],
      },
    });
  });

  afterAll(async () => {
    wrapper.unmount();
  });

  test("should render itself", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });

  test("should have radio type input", () => {
    expect(wrapper.get('[data-test="radio"]')).toBeTruthy();
  });

  test('should have string value in element with attribute data-test="radio"', () => {
    expect(wrapper.get('[data-test="radio"]').attributes("value"))
      .toBeTypeOf("string")
      .toMatch(note);
  });
});
