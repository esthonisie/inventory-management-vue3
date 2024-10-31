<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { getInventoryDataById } from "../store";
import { getIndexOfInventoryData } from "../store";
import { updateInventoryData } from "../store";
import InventoryForm from "../components/InventoryForm.vue";

const route = useRoute();
const router = useRouter();

// TODO: naamgeving kan nog iets eenduidiger, dus inventoryId ipv id
const id = parseInt(route.params.id);

const getInventoryData = getInventoryDataById(id);

const inventoryData = Object.assign({}, getInventoryData.value);

const submitForm = () => {
  const index = getIndexOfInventoryData(id);
  updateInventoryData(index.value, inventoryData);
  router.push({ name: "home" });
};
</script>

<template>
  <InventoryForm v-model:data="inventoryData" @submit="submitForm()" />
</template>
