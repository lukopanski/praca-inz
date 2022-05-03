<template>
    <div>
        <CheckpointPicker />
        <NotePicker :names="names" />
        <OctavePicker :octaves="octaves" />
    </div>
</template>

<script setup>
import CheckpointPicker from "@/components/CheckpointPicker/CheckpointPicker.vue";
import NotePicker from "@/components/NotePicker/NotePicker.vue";
import OctavePicker from "@/components/OctavePicker/OctavePicker.vue";
import useNotes from "@/composables/useNotes/useNotes.js";

const { names, octaves } = useNotes(); 
</script>