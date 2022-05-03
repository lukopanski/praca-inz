<template>
  <div class="player">
    <div class="player__buttons">
      <PlayButton />
      <PauseButton />
      <StopButton />
    </div>
  </div>
</template>

<script setup>
import PlayButton from "@/components/PlayButton/PlayButton.vue";
import PauseButton from "@/components/PauseButton/PauseButton.vue";
import StopButton from "@/components/StopButton/StopButton.vue";
</script>
