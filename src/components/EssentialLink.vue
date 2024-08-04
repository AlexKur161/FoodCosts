<template>
  <div class="menu-wrapper">
    <div :key="i" v-for="(link, i) in menuLink" class="menu-flex q-mb-sm">
      <q-icon color="primary" size="24px" :name="link.nameIcon"></q-icon>
      <q-item
        class="q-pa-none flex items-center"
        dense
        clickable
        tag="a"
        :href="link.link"
      >
        <q-item-label class="q-pa-none">{{ link.title }}</q-item-label>
      </q-item>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const menuLink = [
  { title: "календарь расходов", link: "/", nameIcon: "calendar_month" },
  { title: "отсчеты по тратам", link: "/", nameIcon: "summarize" },
];
</script>
<style scoped>
.menu-wrapper {
  width: 30%;
}
.menu-flex {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
