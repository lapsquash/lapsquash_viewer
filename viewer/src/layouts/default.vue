<script setup lang="ts">
import { mdiAccount, mdiCounter, mdiHome } from "@mdi/js";

const drawer = ref<boolean>(true);
const isLoading = ref<boolean>(true);

onMounted(() => (isLoading.value = false));

const items = [
  { id: "/", title: "Home", icon: mdiHome },
  { id: "/login", title: "Login", icon: mdiCounter },
];
</script>
<template>
  <VApp>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <VBtn :icon="mdiAccount"></VBtn>
      <search-bar />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary expand-on-hover>
      <v-list v-for="item in items" :key="item.id" three-line>
        <v-list-item class="list-item" :to="`${item.id}`" link>
          <v-row>
            <v-col cols="3">
              <v-icon class="list-item-icon">{{ item.icon }}</v-icon>
            </v-col>
            <v-col cols="9">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-col>
          </v-row>
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

.list-item-icon {
  color: rgb(var(--v-theme-primary));
}
</style>
