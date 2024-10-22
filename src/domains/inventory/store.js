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

// actions