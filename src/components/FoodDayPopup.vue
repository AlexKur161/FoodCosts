<template>
  <q-dialog :value="showDialog">
    <q-card v-if="!timeShowFood" class="dialog-wrapper">
      <q-card-section>
        <div class="text-h6 text-center">Добавить прием пищи</div>
      </q-card-section>

      <q-card-section class="q-pt-none flex justify-center">
        <q-btn @click="addEating('завтрак')">Добавить завтрак</q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none flex justify-center">
        <q-btn @click="addEating('обед')">Добавить обед</q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none flex justify-center">
        <q-btn @click="addEating('ужин')">Добавить ужин</q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none flex justify-center">
        <q-btn @click="addEating('перекус')">Добавить перекус</q-btn>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
    <q-card v-if="timeShowFood" class="dialog-wrapper">
      <q-card-section>
        <p class="title-add-product text-h6 text-center">Добавить продукт</p>
      </q-card-section>
      <q-card-section class="q-pt-none flex justify-center">
        <q-input
          v-model="expensesFood.title"
          class="input-food-popup input-food-title"
          label="Название"
        ></q-input>
        <q-input
          type="number"
          v-model="expensesFood.quantity"
          class="input-food-popup"
          label="Количество"
        ></q-input>
        <q-input
          type="number"
          v-model="expensesFood.price"
          class="input-food-popup"
          label="Цена"
        ></q-input>
        <q-btn @click="addFood">Добавить</q-btn>
      </q-card-section>
      <q-card-section v-if="expensesFoods.length == 0" class="q-pt-none">
        <p class="text-center">Вы ничего не добавили</p>
      </q-card-section>
      <q-card-section v-else class="q-pt-none">
        <div
          class="flex wrapper-discription-food"
          v-for="(expenses, i) in expensesFoods"
          :key="i"
        >
          <p class="discription-food">{{ expenses.title }}</p>
          <p class="discription-food">{{ expenses.quantity }} г</p>
          <p class="discription-food">{{ expenses.price }} р</p>
          <p class="discription-food">Итого {{ expenses.total }} р</p>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none flex items-center justify-between">
        <div>Итого {{ fullPrice }} р</div>
        <q-btn @click="timeShowFood = false">Назад</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive, defineProps, watch, computed } from "vue";

defineOptions({
  name: "FoodDayPopup",
});

const props = defineProps({
  showDialog: Boolean,
});

const timeShowFood = ref(false);
const expensesFood = ref({
  title: "",
  quantity: "",
  price: "",
  total: 0,
});

const expensesFoods = ref([]);
const fullPrice = computed(() => {
  if (expensesFoods.value.length > 0) {
    console.log(expensesFoods.value);
    return expensesFoods.value.reduce((acc, item) => acc + item.total, 0);
  } else {
    return 0;
  }
});

function addEating(timeFood) {
  timeShowFood.value = true;
  console.log(timeFood);
}

function addFood() {
  console.log("1", expensesFood.value);
  expensesFood.value.total =
    (+expensesFood.value.quantity).toFixed(1) *
    (+expensesFood.value.price).toFixed(1);
  expensesFoods.value.push(expensesFood.value);
  expensesFood.value = {
    title: "",
    quantity: 0,
    price: 0,
    total: 0,
  };
}
</script>

<style scoped>
.dialog-wrapper {
  width: 600px;
}
.input-food-popup {
  max-width: 100px;
}
.input-food-title {
  max-width: 150px;
}
.wrapper-discription-food {
  gap: 15px;
}
</style>
