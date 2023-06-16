<script setup lang="ts">
import { useConfigStore } from "@/helpers/model/stores/config";
import { useCounterStore } from "@/helpers/model/stores/ui";

let filePath = ref("");

const counter = useCounterStore();
const config = useConfigStore();

const saveConfig = () => {
  config.$state.data = {
    credential: "12",
  };
};

const openDialog = async () => (filePath.value = await window.openDialog());
</script>
<template>
  {{ counter.count }} <br />
  {{ filePath }} <br />
  <VBtn @click="counter.count++">Increment</VBtn>
  <VBtn @click="saveConfig">Save</VBtn>
  <VBtn @click="openDialog">dialog</VBtn>
</template>
<style scoped lang="scss"></style>
