<script setup>
import InventoryTable from '../components/InventoryTable.vue'
import { getInventoryData } from '../store.js'
</script>

<template>
  <InventoryTable v-model="getInventoryData" />
</template>