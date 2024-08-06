<template>
  <div class="main-statement-wrapper">
    {{ dayFood }}
    <div class="data-wrapper">
      <p class="data-title">{{ dayFood.data }}</p>
    </div>
    <div>
      <p class="time-title-food">Завтрак</p>
      <div v-for="(breakFood, i) in breakfast" :key="i">{{ breakFood }}</div>
    </div>

    <div>
      <p class="time-title-food">Обед</p>
      <div v-for="(lunchFood, i) in lunch" :key="i">{{ lunchFood }}</div>
    </div>
    <div>
      <p class="time-title-food">Ужин</p>
      <div v-for="(dinnerFood, i) in dinner" :key="i">{{ dinnerFood }}</div>
    </div>
    <div>
      <p class="time-title-food">Перекусы</p>
      <div v-for="(snackFood, i) in snack" :key="i">{{ snackFood }}</div>
    </div>
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
  return props.dayFood.filter((item) => {
    return item.timeFood === "завтрак";
  });
});

const lunch = computed(() => {
  return props.dayFood.filter((item) => {
    return item.timeFood === "обед";
  });
});

const dinner = computed(() => {
  return props.dayFood.filter((item) => {
    return item.timeFood === "ужин";
  });
});

const snack = computed(() => {
  return props.dayFood.filter((item) => {
    return item.timeFood === "перекус";
  });
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
