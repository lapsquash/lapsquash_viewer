<script setup lang="ts">
import { runAuthRedirect } from "@/helpers/model/auth";

const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <div>
    <VBtn @click="runAuthRedirect">ログイン！</VBtn>
  </div>
</template>

<style scoped lang="scss">
main {
  padding: 0 100px;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    padding: 0 20px;
  }
}
</style>
