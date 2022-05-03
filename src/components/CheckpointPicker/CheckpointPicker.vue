<template>
  <div>
    <RadioButton 
        id="radio-magenta-trained" 
        name="magenta-checkpoint" 
        :value="checkpointUrl" 
        v-model="store.checkpoint" 
    />
    <label for="radio-magenta-trained">Punkt kontrolny z Magenta</label>
    <RadioButton 
        id="radio-i-trained" 
        name="mine-checkpoint" 
        value="scieżkaDoPliku" 
        v-model="store.checkpoint" 
    />
    <label for="radio-i-trained">Mój punkt kontrolny</label>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { store } from '@/store/store.js';
import RadioButton from 'primevue/radiobutton';
import { checkpointUrl } from "@/common/magenta.js";
import usePlayer from "@/composables/usePlayer/usePlayer";
import PlayerState from "@/common/enums/PlayerState.js";
import AIModel from "@/adapters/AIModel/AIModel.js";

const { player } = usePlayer();

watch(() => store.checkpoint, async () => {
    store.playerState = PlayerState.STOPPED;
    store.model = new AIModel();
    await store.model.initialize();
})

watch(() => store.playerState, (current) => {
  if (current === PlayerState.STOPPED) {
    player.stop();
  }
});
</script>
