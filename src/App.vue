<script setup>
import { RouterLink } from 'vue-router'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-container">
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/create">add new item</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
  .main-container {
    width: 768px;
    max-width: 768px;
    margin: 40px auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 5px;
  }

  a {
    color: #fb9f93;
  }
</style>