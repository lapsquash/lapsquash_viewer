<script setup lang="ts">
const isLoading = ref<boolean>(true);

onMounted(() => (isLoading.value = false));
</script>
<template>
  <div>
    <title-bar />
    <vMain>
      <div class="slot-container">
        <VProgressLinear :indeterminate="isLoading" class="progress"></VProgressLinear>
        <slot></slot>
      </div>
    </vMain>
  </div>
</template>
<style scoped lang="scss">
.slot-container {
  padding-top: var(--title-bar-height);

  .progress {
    position: fixed;
    top: var(--title-bar-height) !important;
    z-index: 9;
    background-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary));
  }
}
</style>
