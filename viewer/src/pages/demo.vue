<script setup lang="ts">
import { useConfigStore } from "@/helpers/model/stores/config";
import { useCounterStore } from "@/helpers/model/stores/ui";

const counter = useCounterStore();
const config = useConfigStore();

const saveConfig = () => {
  config.$state.data = {
    credential: "12",
  };
};
</script>
<template>
  {{ counter.count }} <br />
  <VBtn @click="counter.count++">Increment</VBtn>
  <VBtn @click="saveConfig">Save</VBtn>
</template>
<style scoped lang="scss"></style>
