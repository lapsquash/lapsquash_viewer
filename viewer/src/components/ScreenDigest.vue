<script setup lang="ts">
interface Project {
  title: string;
  text: string;
  tag: string[];
  uuid: number;
}

const items = ref<Project[]>([
  { title: "Project 1", text: "test4", tag: ["tag1", "egg"], uuid: 1234 },
  { title: "Project 2", text: "test3", tag: ["tag2"], uuid: 2345 },
  { title: "Project 3", text: "test2", tag: ["tag3"], uuid: 3456 },
  { title: "Project 4", text: "test1", tag: ["tag4"], uuid: 4567 },
]);
</script>
<template>
  <div>
    <v-card class="pa-3">
      <v-row v-for="item in items" :key="item.title">
        <v-col cols="12">
          <v-card class="timeCard">
            <v-card-title>{{ item.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style scoped lang="scss">
.v-card {
  width: 100%;
}

.v-card-title {
  font-size: 10px;
}

.timeCard {
  min-height: 300px;
}
</style>
