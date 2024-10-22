<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<style scoped>
  .main-container {
    width: 768px;
    max-width: 768px;
    margin: 40px auto;
  }
</style>