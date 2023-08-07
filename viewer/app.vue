<script setup></script>

<template>
  <VApp>
    <NuxtLayout>
      <VMain class="v-main">
        <NuxtPage />
      </VMain>
    </NuxtLayout>
  </VApp>
</template>

<style scoped lang="scss">
.body::-webkit-scrollbar {
  width: 8px;
}

.body::-webkit-scrollbar-thumb {
  background-color: #56aff6;
  border-radius: 100px;
}
</style>
