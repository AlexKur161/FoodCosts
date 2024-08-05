<template>
  <div class="header-wrapper">
    <header class="header">
      <q-btn round color="white" glossy text-color="primary" icon="widgets">
        <q-menu transition-show="jump-down" transition-hide="jump-up">
          <q-list style="min-width: 100%">
            <q-item clickable>
              <q-item-section>
                <router-link to="/"
                  >Календарь расходов</router-link
                ></q-item-section
              >
            </q-item>
            <q-item clickable>
              <q-item-section>
                <router-link to="/statement"
                  >Отсчеты по тратам</router-link
                ></q-item-section
              >
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </header>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  background: #1976d2;
}
</style>
