<script setup>
import { RouterLink } from "vue-router";

const showInventoryData = defineModel();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th></th>
        <th>Amount (actual)</th>
        <th>Amount (minimum)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in showInventoryData">
        <td>{{ data.name }}</td>
        <td>
          <RouterLink :to="`/edit/${data.id}`"> edit </RouterLink>
        </td>
        <td>
          <form>
            <!-- TODO: officieel zijn computed properties read-only, in dit geval de data uit de store. 
             Je wordt geacht een writeble computed property te maken in dit geval, zie: 
             https://vuejs.org/guide/essentials/computed.html#writable-computed -->
            <input type="number" v-model="data.actualAmount" min="0" max="50" />
          </form>
        </td>
        <td>{{ data.minimumAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  color: #fff7e9;
  background-color: #464646;
  width: 100%;
}

tr {
  border-bottom: 1px solid #fb9f93;
}

th,
td {
  padding: 10px;
}

th {
  text-transform: uppercase;
  text-align: left;
}

a {
  color: #fb9f93;
}
</style>
