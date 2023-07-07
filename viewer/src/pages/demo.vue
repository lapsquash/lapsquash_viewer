<script setup lang="ts">
import { useConfigStore } from "@/helpers/model/stores/config";
import { useCounterStore } from "@/helpers/model/stores/ui";

const counter = useCounterStore();
const config = useConfigStore();
</script>
<template>
  {{ counter.count }} <br />
  {{ config.$state }} <br />
  <VBtn @click="counter.count++">Increment</VBtn>
</template>
<style scoped lang="scss"></style>
