<template>
  <q-dialog @hide="hideFoodPopup" @show="showPopFood" :value="showDialog">
    <q-card v-if="!timeShowFood && datePopup !== null" class="dialog-wrapper">
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
        <p class="title-add-product text-h6 text-center q-mb-none">
          Добавить продукт
        </p>
      </q-card-section>
      <q-card-section class="q-pt-none flex justify-center inp-wrapper">
        <q-input
          dense
          filled
          v-model="expensesFood.title"
          class="input-food-popup input-food-title"
          label="Название"
        ></q-input>
        <q-input
          dense
          filled
          type="number"
          v-model="expensesFood.quantity"
          class="input-food-popup"
          label="Кол-во в гр"
        ></q-input>
        <q-input
          dense
          filled
          type="number"
          v-model="expensesFood.price"
          class="input-food-popup"
          label="Цена за гр"
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
          <p class="discription-food">{{ expenses.quantity }} гр</p>
          <p class="discription-food">{{ expenses.price }} р</p>
          <p class="discription-food">Итого {{ expenses.total }} р</p>
          <q-btn
            class="remove-btn"
            dense
            size="10px"
            round
            color="primary"
            icon="remove"
            @click="deleteFood(expenses)"
          ></q-btn>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none flex items-center justify-between">
        <div>Итого {{ fullPrice }} р</div>
        <q-btn @click="prevFood">Назад</q-btn>
      </q-card-section>
    </q-card>
    <q-card v-if="datePopup === null" class="dialog-wrapper">
      <p class="text-center">Выберите дату</p>
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
  datePopup: String,
});

const timeShowFood = ref(false);
const timeFood = ref("");
const expensesFood = ref({
  title: "",
  quantity: "",
  price: "",
  total: 0,
  timeFood: "",
  data: "",
});

const expensesDay = ref([]);
const expensesFoods = ref([]);

const fullPrice = computed(() => {
  if (expensesFoods.value.length > 0) {
    console.log(expensesFoods.value);
    return expensesFoods.value.reduce((acc, item) => acc + +item.total, 0);
  } else {
    return 0;
  }
});

function addEating(timeFd) {
  timeShowFood.value = true;
  timeFood.value = timeFd;
  expensesFoods.value = expensesDay.value.filter((item) => {
    return item.timeFood == timeFd;
  });
}

function addFood() {
  console.log("1", expensesFood.value);
  expensesFood.value.total =
    (+expensesFood.value.quantity).toFixed(1) *
    (+expensesFood.value.price).toFixed(1);
  expensesFood.value.total = (+expensesFood.value.total).toFixed(0);
  expensesFood.value.data = props.datePopup;
  expensesFood.value.timeFood = timeFood.value;
  expensesFood.value.id = Date.now();
  expensesFoods.value.push(expensesFood.value);
  expensesDay.value.push(expensesFood.value);
  // newFoods.value.push(expensesFood.value);
  let allExpensesFoods = JSON.parse(localStorage.getItem("foodObject"));
  console.log(allExpensesFoods);
  if (allExpensesFoods) {
    allExpensesFoods.push(expensesFood.value);
  } else {
    allExpensesFoods = expensesFoods.value;
  }
  const localExpensesFoods = JSON.stringify(allExpensesFoods);
  console.log(allExpensesFoods);
  localStorage.setItem("foodObject", localExpensesFoods);
  expensesFood.value = {
    title: "",
    quantity: 0,
    price: 0,
    total: 0,
    data: "",
  };
}

function deleteFood(food) {
  let allExpensesFoods = JSON.parse(localStorage.getItem("foodObject"));
  allExpensesFoods = allExpensesFoods.filter((item) => item.id !== food.id);
  const localExpensesFoods = JSON.stringify(allExpensesFoods);
  localStorage.setItem("foodObject", localExpensesFoods);
  expensesFoods.value = expensesDay.value.filter((item) => {
    return item.id !== food.id;
  });
  showPopFood();
}

function prevFood() {
  timeShowFood.value = false;
  timeFood.value = "";
}

function showPopFood() {
  console.log("srabotal");
  let fullFoodData = JSON.parse(localStorage.getItem("foodObject"));
  console.log(fullFoodData);
  if (fullFoodData) {
    fullFoodData = fullFoodData.filter((item) => {
      return item.data == props.datePopup;
    });
    expensesDay.value = fullFoodData;
  }
}

function hideFoodPopup() {
  timeShowFood.value = false;
}
</script>

<style scoped>
.dialog-wrapper {
  width: 600px;
}
.input-food-popup {
  min-width: 220px;
}

.input-food-title {
  max-width: 150px;
}
.wrapper-discription-food {
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}
.discription-food {
  margin-bottom: 0;
}
.inp-wrapper {
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.remove-btn {
  height: 12px;
}
</style>
