<template>
  <vue-tree class="tree" :dataset="data || []" :collapse-enabled="false">
    <template v-slot:node="{ node }">
      <span class="tree-node" @click="select(node)">{{ node.value }}</span>
    </template>
  </vue-tree>
</template>

<script setup lang="ts">
import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";

import { Tree } from "@/types/Tree";

const $emit = defineEmits(["select"]);

const { data } = defineProps<{
  data: Tree | null;
}>();

const select = (node: Tree) => $emit("select", node);
</script>

<style scoped lang="scss">
.tree {
  width: 100%;
  height: 100%;
}

.tree-node {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: antiquewhite;
  border: 2px solid grey;
}
</style>
