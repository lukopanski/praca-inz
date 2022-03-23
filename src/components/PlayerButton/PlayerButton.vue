<template>
  <button>{{ text }}</button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: { required: true, type: String },
});
</script>
