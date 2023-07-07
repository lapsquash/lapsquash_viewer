<script setup lang="ts">
import { useConfigStore } from "@/helpers/model/stores/config";
import { useCounterStore } from "@/helpers/model/stores/ui";

let filePath = ref("");

const counter = useCounterStore();
const config = useConfigStore();

const getConfig = async () => console.log(await window.getConfig());
const test = () => window.test();
</script>
<template>
  {{ counter.count }} <br />
  {{ filePath }} <br />
  <VBtn @click="counter.count++">Increment</VBtn>
  <VBtn @click="getConfig">getConfig</VBtn>
  <VBtn @click="test">test</VBtn>
</template>
<style scoped lang="scss"></style>
