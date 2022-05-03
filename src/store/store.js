import { reactive } from 'vue'
import useNotes from "@/composables/useNotes/useNotes.js";
import PlayerState from "@/common/enums/PlayerState.js";
import { checkpointUrl } from "@/common/magenta.js";

const { names, octaves } = useNotes();

export const store = reactive({
    note: names.value[0],
    octave: octaves.value[3],
    playerState: PlayerState.STOPPED,
    checkpoint: checkpointUrl,
    aiModel: null,
    sequence: null,
});