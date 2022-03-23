import { describe, expect, test } from "vitest";
import useNotes from "@/composables/notes/notes.js";
import { noteName, note } from "@/common/regex/noteValidator";

// think about internationalization of notes

describe("useNotes composable", () => {
  const composable = useNotes();

  test("should return object which can be destructurized into array of octaves, note names and notes", () => {
    expect(composable).toBeTruthy();
    expect(composable).toBeInstanceOf(Object);

    Object.keys(composable).forEach((key) => {
      expect(composable[key].value).toBeTruthy();
      expect(composable[key].value).toBeInstanceOf(Array);
    });

    expect(
      composable.octaves.value.filter((item) => item >= 1 && item <= 8).length
    ).toBe(composable.octaves.value.length);

    composable.names.value.forEach((item) => {
      expect(item).toMatch(noteName);
    });

    composable.notes.value.forEach((item) => {
      expect(item).toMatch(note);
    });
  });
});
