<template>
  <Button @click="stop" icon="pi pi-stop" iconPos="center"/>
</template>

<script setup>
import { watch } from "vue";
import Button from 'primevue/button';
import usePlayer from "@/composables/usePlayer/usePlayer";
import { store } from '@/store/store.js';
import PlayerState from "@/common/enums/PlayerState.js";

const { player } = usePlayer();

const stop = () => player.stop();
</script>
