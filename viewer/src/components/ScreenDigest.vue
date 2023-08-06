<script setup lang="ts">
const router = useRoute();
const uuid = router.params.uuid;
const fs = require("fs");
const json = fs.readFileSync(`./src/assets/projects/${uuid}/manifest.json`);
const project = JSON.parse(json);
const date = new Date(project.startWith).toLocaleString("ja-JP", {
  dateStyle: "medium",
  timeStyle: "short",
});
const assets = project.assets;
console.log(uuid,date);


</script>
<template>
  <div class="pa-12">
    <v-card class="pa-3">
      <v-row v-for="item in assets" :key="project.title">
        <v-col cols="12">
          <v-card class="timeCard">
            <v-card-title>{{ item.elapsedMs }}</v-card-title>
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
