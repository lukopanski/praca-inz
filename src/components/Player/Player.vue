<template>
  <div>
    <Picker />
    <Picker />
  </div>
  <div>
    <PlayPauseButton />
    <StopButton />
  </div>
</template>

<script setup>
import PlayPauseButton from "@/components/PlayPauseButton/PlayPauseButton.vue";
import StopButton from "@/components/StopButton/StopButton.vue";
import Picker from "@/components/Picker/Picker.vue";
</script>
