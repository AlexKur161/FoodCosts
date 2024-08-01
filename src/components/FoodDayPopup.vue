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
      <q-card-section class="q-pt-none flex justify-center">
        <q-input></q-input>
        <q-btn @click="timeShowFood = false">назад</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive, defineProps } from "vue";

defineOptions({
  name: "FoodDayPopup",
});

const props = defineProps({
  showDialog: Boolean,
});

const timeShowFood = ref(false);

function addEating(timeFood) {
  timeShowFood.value = true;
  console.log(timeFood);
}
</script>

<style scoped>
.dialog-wrapper {
  width: 30%;
}
</style>
