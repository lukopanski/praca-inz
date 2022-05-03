<template>
  <Player />
  <Picker />
</template>

<script setup>
import { onBeforeMount } from "vue";
import Player from "@/components/Player/Player.vue";
import Picker from "@/components/Picker/Picker.vue";
import { store } from '@/store/store.js';
import AIModel from "@/adapters/AIModel/AIModel.js";

onBeforeMount(async () => {
  store.aiModel = new AIModel();
  await store.aiModel.initialize();
})
</script>
