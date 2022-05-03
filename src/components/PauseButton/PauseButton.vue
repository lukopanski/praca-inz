<template>
  <Button @click="pause" icon="pi pi-pause" iconPos="center"/>
</template>

<script setup>
import Button from 'primevue/button';
import usePlayer from "@/composables/usePlayer/usePlayer.js";

const { player } = usePlayer();

const pause = () => {
    player.pause();
};
</script>
