<template>
  <input type="radio" data-test="radio" :value="value" />
</template>

<script setup>
const props = defineProps({
  value: { type: String, required: true },
});
</script>
