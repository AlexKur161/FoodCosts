<template>
  <div class="menu-wrapper">
    <q-item
      v-for="(link, i) in menuLink"
      :key="i"
      clickable
      tag="a"
      :href="link.link"
    >
      <q-item-label>{{ link.title }}</q-item-label>
    </q-item>
  </div>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const menuLink = [
  { title: "календарь расходов", link: "/" },
  { title: "отсчеты по тратам", link: "/" },
];
</script>
<style scoped>
.menu-wrapper {
  width: 30%;
}
</style>
