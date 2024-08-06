<template>
  <div class="main-statement-wrapper">
    <div class="data-wrapper q-mb-sm flex justify-between">
      <p class="data-title">{{ dayFood[0].data }}</p>
      <p class="data-title">{{ fullMoney }} ₽</p>
    </div>
    <div class="q-mb-md">
      <p class="time-title-food">Завтрак</p>
      <div
        class="flex time-wrapper-food"
        v-for="(breakFood, i) in breakfast"
        :key="i"
      >
        <p>{{ breakFood.title }}</p>
        <p>{{ breakFood.quantity }}</p>
        <p>{{ breakFood.price }}</p>
        <p>{{ breakFood.total }}</p>
      </div>
      <div v-if="breakfast.length == 0">Вы ничего не добавили</div>
    </div>

    <div class="q-mb-md">
      <p class="time-title-food">Обед</p>
      <div
        class="flex time-wrapper-food"
        v-for="(lunchFood, i) in lunch"
        :key="i"
      >
        <p>{{ lunchFood.title }}</p>
        <p>{{ lunchFood.quantity }}</p>
        <p>{{ lunchFood.price }}</p>
        <p>{{ lunchFood.total }}</p>
      </div>
      <div v-if="lunch.length == 0">Вы ничего не добавили</div>
    </div>

    <div class="q-mb-md">
      <p class="time-title-food">Ужин</p>
      <div
        class="flex time-wrapper-food"
        v-for="(dinnerFood, i) in dinner"
        :key="i"
      >
        <div class="flex time-wrapper-food">
          <p>{{ dinnerFood.title }}</p>
          <p>{{ dinnerFood.quantity }}</p>
          <p>{{ dinnerFood.price }}</p>
          <p>{{ dinnerFood.total }}</p>
        </div>
      </div>
      <div v-if="dinner.length == 0">Вы ничего не добавили</div>
    </div>

    <div class="q-mb-md">
      <p class="time-title-food">Перекусы</p>
      <div
        class="flex time-wrapper-food"
        v-for="(snackFood, i) in snack"
        :key="i"
      >
        <p>{{ snackFood.title }}</p>
        <p>{{ snackFood.quantity }}</p>
        <p>{{ snackFood.price }}</p>
        <p>{{ snackFood.total }}</p>
      </div>
      <div v-if="snack.length == 0">Вы ничего не добавили</div>
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

const fullMoney = computed(() => {
  return props.dayFood.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
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
  color: #fff;
  font-size: 24px;
  margin: 0;
}
.time-title-food {
  font-size: 18px;
}
.time-wrapper-food {
  gap: 20px;
}
@media (max-width: 620px) {
}
</style>
