<script setup lang="ts">
import { mdiAccount } from "@mdi/js";

const drawer = ref<boolean>(true);
const isLoading = ref<boolean>(true);

onMounted(() => (isLoading.value = false));

const items = [
  { id: "/", title: "Home" },
  { id: "/projects/projects", title: "Projects" },
];
</script>
<template>
  <VApp>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <VBtn :icon="mdiAccount"></VBtn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover>
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
      <v-main></v-main>
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

v-navigation-drawer {
  transition: transform 0.5s ease-in-out;
}

v-list-item {
  transition: transform 0.5s ease-in-out;
}

v-navigation-drawer--open {
  transform: translateX(100%);
}

v-list-item--open {
  transform: translateY(-100%);
}
</style>
