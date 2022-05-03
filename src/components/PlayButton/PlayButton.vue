<template>
  <Button @click="play" icon="pi pi-play" iconPos="center"/>
</template>

<script setup>
import Button from 'primevue/button';
import PlayPlayerState from "@/common/enums/PlayPlayerState.js";
import usePlayer from "@/composables/usePlayer/usePlayer.js";
import { store } from '@/store/store.js';

const { player } = usePlayer();

const play = async () => {
  // PlayPlayerState[store.playerState.toUpperCase()]();
  await player.play();
};
</script>
