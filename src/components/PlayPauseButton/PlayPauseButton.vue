<template>
  <PlayerButton @click="playPause" text="play/pause" />
</template>

<script setup>
// import PlayerState from "@/common/enums/PlayerState.js";
import PlayerButton from "@/components/PlayerButton/PlayerButton.vue";
// import usePlayer from "@/composables/player/player.js";

// const { player } = usePlayer();

const playPause = () => {
  // const key = player.getPlayState();
  // PlayerState[key.toUpperCase()]();
};
</script>
