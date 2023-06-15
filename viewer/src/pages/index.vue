<script setup lang="ts">
import { runAuthRedirect } from "@/helpers/model/auth";

const isLoading = ref(true);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <div>
    <div class="wide-title">
      A Vue3 project template with<br />
      Nuxt3 & Vuetify3
    </div>
    <VBtn @click="runAuthRedirect">ログイン！</VBtn> <br /><br />
    <VBtn @click="$router.push('/demo')">pinia ページへ</VBtn>
    <main>
      <CoffeeCard />
    </main>
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
