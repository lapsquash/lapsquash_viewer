<script setup lang="ts"></script>
<template>
  <div class="title-bar">
    <v-app-bar>
      <v-app-bar-nav-icon />
    </v-app-bar>
  </div>
</template>
<style scoped lang="scss">
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: var(--title-bar-height);
  width: 100%;
  -webkit-app-region: drag;
  background-color: rgb(var(--v-theme-primary));
  color: white;
  text-align: center;

  p {
    line-height: var(--title-bar-height);
  }
}
</style>
