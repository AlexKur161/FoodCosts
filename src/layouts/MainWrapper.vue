<template>
  <div class="main-wrapper">
    <EssentialLink></EssentialLink>
    <CalendarFood></CalendarFood>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import EssentialLink from "/src/components/EssentialLink.vue";
import CalendarFood from "/src/components/CalendarFood.vue";
</script>

<style scoped>
.main-wrapper {
  padding-top: 100px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>
