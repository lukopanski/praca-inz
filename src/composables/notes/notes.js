import { ref } from "vue";

const names = ref([
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
]);

const octaves = ref(Array.from({ length: 8 }, (_, i) => i + 1));

const notes = (function () {
  const noteArray = [];
  octaves.value.forEach((octave) => {
    names.value.forEach((name) => {
      noteArray.push(`${name}${octave}`);
    });
  });

  return ref(noteArray);
})();

export default function useNotes() {
  return { names, octaves, notes };
}
