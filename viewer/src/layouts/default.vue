<script setup lang="ts">
const drawer = ref<boolean>(false);
const isLoading = ref<boolean>(true);

onMounted(() => (isLoading.value = false));

const items = [
  { id: "/", title: "Home" },
  { id: "/projects/projects", title: "Projects" },
  { id: "viewer", title: "Viewer" },
];
</script>
<template>
  <VApp>
    <v-app-bar>
      <div class="title-bar"></div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          link
          :to="`${item.id}`"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <div class="slot-container">
        <VProgressLinear
          :indeterminate="isLoading"
          class="progress"
        ></VProgressLinear>
        <slot></slot>
      </div>
  </VApp>
</template>
<style scoped lang="scss">
.slot-container {
  .progress {
    position: fixed;
    top: var(--title-bar-height) !important;
    z-index: 9;
    background-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary));
  }
}

.title-bar {
  -webkit-app-region: drag;
  position: fixed;
  height: 20px;
}
</style>
