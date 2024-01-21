<template>
  <div
    v-if="visible"
    class="overlay"
    @click="close(false)"
    style="z-index: 999"
  ></div>

  <v-card class="bottom-sheet" :class="{ visible }" height="200" elevation="24">
    <v-btn
      class="close-btn"
      density="compact"
      icon="mdi-close"
      @click="close(false)"
    ></v-btn>

    <template v-slot:title>{{ node?.name }}</template>

    <template v-slot:subtitle>{{ node?.description }}</template>
  </v-card>
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
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: translateY(100%);

  &.visible {
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
