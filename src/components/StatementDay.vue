<template>
  <div class="main-statement-wrapper">
    {{ dayFood }}
    <div class="data-wrapper">
      <p class="data-title">{{ dayFood.data }}</p>
    </div>
    <div><p class="time-title-food">Завтрак</p></div>
    <div><p class="time-title-food">Обед</p></div>
    <div><p class="time-title-food">Ужин</p></div>
    <div><p class="time-title-food">Перекусы</p></div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed } from "vue";

defineOptions({
  name: "StatementDay",
});

const props = defineProps({
  dayFood: Array,
});

const breakfast = computed(() => {
  return "";
});
</script>

<style scoped>
.main-statement-wrapper {
  margin-bottom: 40px;
}
.data-wrapper {
  background: #1976d2;
  padding: 10px;
}
.data-title {
  color: white;
  font-size: 24px;
  margin: 0;
}
.time-title-food {
  font-size: 18px;
}
@media (max-width: 620px) {
}
</style>
