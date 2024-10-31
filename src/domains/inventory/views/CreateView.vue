<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InventoryForm from "../components/InventoryForm.vue";
import { addInventoryData } from "../store";
import { newId } from "../id-generator.js";

const router = useRouter();

// TODO: creatieve oplossing, maar ik zou in dit geval de toekenning van de id pas in de store doen, en niet
// hier op de pagina, omdat op deze pagina de id nog onbekend en onnodig is
const id = newId();

const newInventoryData = ref({
  id: id,
  name: "",
  actualAmount: null,
  minimumAmount: null,
});

const submitForm = () => {
  const submitInventoryData = Object.assign({}, newInventoryData.value);
  addInventoryData(submitInventoryData);
  router.push({ name: "home" });
};
</script>

<template>
  <InventoryForm v-model:data="newInventoryData" @submit="submitForm()" />
</template>
