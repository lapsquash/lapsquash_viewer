<script setup lang="ts">
import { useCounterStore } from "@/helpers/model/stores/ui";

const counter = useCounterStore();
</script>
<template>
  {{ counter.count }} <br />
  <VBtn @click="counter.count++">Increment</VBtn>
</template>
<style scoped lang="scss"></style>
