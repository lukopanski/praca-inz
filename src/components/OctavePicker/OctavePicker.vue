<template>
    <Dropdown v-model="store.octave" :options="octaves" />
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { store } from '@/store/store.js';
import Dropdown from 'primevue/dropdown';

const props = defineProps({
  octaves: { required: true, type: Array },
});
</script>
