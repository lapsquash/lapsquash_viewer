<script setup lang="ts">
import { mdiAccount, mdiCounter, mdiHome } from "@mdi/js";

const drawer = ref<boolean>(false);
const isLoading = ref<boolean>(true);

onMounted(() => (isLoading.value = false));

const items = [
  { id: "/", title: "Home", icon: mdiHome },
  { id: "/login", title: "Login", icon: mdiCounter },
];
</script>
<template>
  <VApp>
    <v-app-bar elevation="4" elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <VBtn :icon="mdiAccount"></VBtn>
      <search-bar />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary expand-on-hover>
      <v-list
        class="list-hover"
        v-for="item in items"
        :key="item.id"
        three-line
      >
        <transition>
          <v-list-item v-if="drawer" :to="`${item.id}`" link>
            <v-row>
              <v-col cols="3">
                <v-icon class="list-item-icon">{{ item.icon }}</v-icon>
              </v-col>
              <v-col cols="9">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item>
        </transition>
      </v-list>
    </v-navigation-drawer>

    <div class="slot-container">
      <VProgressLinear
        :indeterminate="isLoading"
        class="progress"
      ></VProgressLinear>
      <v-container>
        <v-main></v-main>
      </v-container>
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

.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}

.list-hover {
  padding: 0;
  .v-list-item {
    transition: background-color 0.3s ease-in-out;
    padding: 3vh;
  }
  .v-list-item:hover {
    background-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-on-primary));
    .list-item-icon {
      color: rgb(var(--v-theme-on-primary));
    }
  }
}

.list-item-icon {
  color: rgb(var(--v-theme-primary));
}
</style>
