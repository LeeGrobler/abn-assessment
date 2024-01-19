// Utilities
import { Data } from "@/types/Data";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  actions: {
    async fetch() {
      try {
        const url =
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://europe-west2-seriouslee-v3.cloudfunctions.net/abn";

        const response = await fetch(`${url}/api/data`);

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
