<script setup>
import { mdiPost } from "@mdi/js";
</script>

<template>
  <VApp>
    <VAppBar color="primary">
      <template v-slot:prepend>
        <VAppBarNavIcon color="on-primary" :icon="mdiPost" />
      </template>
      <v-app-bar-title>tpl-nuxt</v-app-bar-title>
    </VAppBar>
    <VMain class="v-main">
      <NuxtPage />
    </VMain>
  </VApp>
</template>

<style scoped lang="scss">
.v-main {
  margin-top: -20px;
}
</style>
