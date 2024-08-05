<template>
  <div class="main-content">
    <MainHeader></MainHeader>
    <MainWrapper> </MainWrapper>
    <MainFooter></MainFooter>
  </div>
</template>

<script setup>
import MainHeader from "/src/layouts/MainHeader.vue";
import MainWrapper from "/src/layouts/MainWrapper.vue";
import MainFooter from "/src/layouts/MainFooter.vue";

defineOptions({
  name: "App",
});
</script>
<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
