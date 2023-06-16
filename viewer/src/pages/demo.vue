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

const readConfig = async () => await window.saveConfig({});
</script>
<template>
  {{ counter.count }} <br />
  {{ filePath }} <br />
  <VBtn @click="counter.count++">Increment</VBtn>
  <VBtn @click="saveConfig">Save</VBtn>
  <VBtn @click="readConfig">dialog</VBtn>
</template>
<style scoped lang="scss"></style>
