<script setup>
const inventoryData = defineModel('data');
import { RouterLink } from 'vue-router'
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="labelContainer">
      <label for="name">Item name:</label>
    </div><br />
    <input 
      id="name" 
      name="name"
      v-model="inventoryData.name"
    ><br />
    <div class="labelContainer">
      <label for="actualAmount">Actual Amount:</label>
    </div><br />
    <input 
      id="actualAmount" 
      name="actualAmount" 
      v-model.number="inventoryData.actualAmount"
    ><br />
    <div class="labelContainer">
      <label for="minimumAmount">Minimum Amount:</label>
    </div><br />
    <input 
      id="minimumAmount" 
      name="minimumAmount" 
      v-model.number="inventoryData.minimumAmount"
    ><br />
    <div class="btnContainer">
      <button type="submit">submit</button>
      <RouterLink to="/">cancel</RouterLink>
    </div>
  </form>
</template>

<style scoped>
  form {
    color: #fff7e9;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }

  .btnContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  button {
    border-bottom: 1px solid #fff7e9;
  }

  a {
    color: #ff4e37;
    border-bottom: 1px solid #ff4e37;
  }
</style>