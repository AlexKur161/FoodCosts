<template>
  <div class="main-wrapper">
    <router-view />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style scoped>
.main-wrapper {
  flex: 1 0 auto;
  padding-top: 100px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
@media (max-width: 620px) {
  .main-wrapper {
    flex-direction: column;
    width: 100%;
  }
}
</style>
