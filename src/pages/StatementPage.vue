<template>
  <p class="text-h4">Все ваши расходы</p>
  <div>
    <StatementDay
      :dayFood="day"
      v-for="(day, i) in reportFood"
      :key="i"
    ></StatementDay>
  </div>
</template>

<script setup>
import StatementDay from "src/components/StatementDay.vue";
import { ref, reactive, onMounted } from "vue";

defineOptions({
  name: "StatementPage",
});

const reportFood = ref([]);

onMounted(() => {
  let dayArr = JSON.parse(localStorage.getItem("foodObject"));
  const key = "data";
  reportFood.value = dayArr.reduce((a, c) => {
    const idx = a.findIndex((e) => e.length > 0 && e[0][key] === c[key]);
    return idx !== -1 ? (a[idx].push(c), a) : (a.push([c]), a);
  }, []);
});
</script>

<style scoped></style>
