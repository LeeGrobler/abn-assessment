<template>
  <v-container class="fill-height px-6">
    <DataVisualiser :data="data" @select="selectNode" />
    <InfoPanel :visible="panelVisible" :node="selectedNode" @close="close" />
    <div class="footer">Lee Grobler - 2024</div>
  </v-container>
</template>

<script lang="ts" setup>
import { useDataStore } from "@/store/data";
import { ref } from "vue";
import { onBeforeMount } from "vue";

import { Tree } from "@/types/Tree";
import { convertToTree } from "@/utils/convertToTree";

const store = useDataStore();
const data = ref<Tree | null>(null);
const panelVisible = ref<boolean>(false);
const selectedNode = ref<Tree | null>(null);

const fetchData = async () => {
  const res = await store.fetch();
  if (!res) return;

  data.value = convertToTree(res)[0];
};

const selectNode = (node: Tree) => {
  selectedNode.value = node;
  panelVisible.value = true;
};

const close = () => {
  selectedNode.value = null;
  panelVisible.value = false;
};

onBeforeMount(fetchData);
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  text-align: center;
}
</style>
