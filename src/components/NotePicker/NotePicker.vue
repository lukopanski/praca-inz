<template>
  <div v-for="name in names" :key="name">
    <RadioButton :id='"radio-" + name' :name="name" :value="name" v-model="store.note" />
    <label :for='"radio-" + name'>{{ name }}</label>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { store } from '@/store/store.js';
import RadioButton from 'primevue/radiobutton';

const props = defineProps({
  names: { required: true, type: Array },
});
</script>
