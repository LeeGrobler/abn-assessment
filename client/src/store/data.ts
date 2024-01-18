// Utilities
import { Data } from "@/types/Data";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  actions: {
    async fetch() {
      try {
        const response = await fetch("http://localhost:3000/api/data");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Data = await response.json();

        return data?.data;
      } catch (err) {
        const message = err instanceof Error ? err.message : err;

        console.error("Error fetching data:", message);
      }
    },
  },
});
