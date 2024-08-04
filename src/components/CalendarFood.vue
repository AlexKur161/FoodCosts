<template>
  <div class="calendar-wrapper">
    <q-date
      dark
      color="primary"
      :locale="myLocale"
      style="width: 100%"
      v-model="date"
      @update:model-value="showDialogFood = true"
    />
    <FoodDayPopup :datePopup="date" v-model="showDialogFood"></FoodDayPopup>
  </div>
</template>

<script setup>
import FoodDayPopup from "/src/components/FoodDayPopup.vue";
import { ref, reactive } from "vue";

defineOptions({
  name: "CalendarFood",
});

const date = ref(new Date());
const showDialogFood = ref(false);
const myLocale = {
  days: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ],
  daysShort: ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Суб"],
  months: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентрябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthsShort: [
    "Ян",
    "Фвр",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сент",
    "Окт",
    "Нбр",
    "Дк",
  ],
};
</script>

<style scoped>
.calendar-wrapper {
  width: 70%;
}
</style>
