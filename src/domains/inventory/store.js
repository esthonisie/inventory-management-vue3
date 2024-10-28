import { ref, computed } from 'vue'

// state
const inventory = ref([
  { id: 1, name: "Schetsboek A5", actualAmount: 14, minimumAmount: 10 },
  { id: 2, name: "Vulpotlood 0.5", actualAmount: 18, minimumAmount: 15 },
  { id: 3, name: "Potloodstiften 2B 0.5", actualAmount: 12, minimumAmount: 10 },
  { id: 4, name: "Kneedgum", actualAmount: 14, minimumAmount: 10 },
  { id: 5, name: "Oostindische inkt 30ml", actualAmount: 5, minimumAmount: 5 },
  { id: 6, name: "Penhouder", actualAmount: 12, minimumAmount: 10 },
  { id: 7, name: "Kroontjes pennetje", actualAmount: 8, minimumAmount: 15 },
]);

// getters
export const getInventoryData = computed(() => inventory.value);
export const getInventoryDataById = (id) => computed(
  () => inventory.value.find(data => data.id === id)
);
export const getIndexOfInventoryData = (id) => computed(
  () => inventory.value.findIndex((data) => data.id === id)
);

// actions
export const addInventoryData = (data) => inventory.value.push(data);
export const updateInventoryData = (index, inventoryDataUpdated) => 
  inventory.value[index] = inventoryDataUpdated
;