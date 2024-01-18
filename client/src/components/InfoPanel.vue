<template>
  <v-bottom-sheet :model-value="visible" @update:model-value="close">
    <v-card height="200">
      <v-btn
        class="close-btn"
        density="compact"
        icon="mdi-close"
        @click="close(false)"
      ></v-btn>

      <template v-slot:title>{{ node?.name }}</template>

      <template v-slot:subtitle>{{ node?.description }}</template>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { Tree } from "@/types/Tree";

const $emit = defineEmits(["close"]);

const { visible } = defineProps<{
  visible: boolean | undefined;
  node: Tree | null;
}>();

const close = (value: Boolean) => {
  if (!value) $emit("close");
};
</script>

<style scoped lang="scss">
.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
