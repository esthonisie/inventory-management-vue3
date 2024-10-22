<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InventoryForm from '../components/InventoryForm.vue'
import { addInventoryData } from '../store'
import { newId } from '../id-generator.js'

const router = useRouter();

const id = newId();

const newInventoryData = ref(
  { 
    id: id,
    name: "",
    actualAmount: null,
    minimumAmount: null,
  },
);

const submitForm = () => {
  const submitInventoryData = Object.assign({}, newInventoryData.value);
  addInventoryData(submitInventoryData);
  router.push({ name: 'home' });
};
</script>

<template>
  <InventoryForm 
    v-model:data="newInventoryData"  
    @submit="submitForm()" 
  />
</template>