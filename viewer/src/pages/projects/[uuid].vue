<script setup lang="ts">
import { mdiBookmark, mdiExclamationThick, mdiMenu } from "@mdi/js";

const router = useRoute();
const uuid = router.params.uuid;
const fs = require("fs");
const json = fs.readFileSync(`./src/assets/projects/${uuid}/manifest.json`);
const project = JSON.parse(json);
const date = new Date(project.startWith).toLocaleString("ja-JP", {
  dateStyle: "medium",
  timeStyle: "short",
});
console.log(uuid);
</script>

<template>
  <div class="grid ma-12">
    <section class="main">
      <v-row>
        <v-col cols="12">
          <v-card>
            <div class="video-player">
              <video
                :src="`../../assets/projects/sample01/assets/1234.mp4`"
                muted
                loop
                autoplay
              ></video>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
          <v-card>
            <v-card-title>
              <v-icon :icon="mdiMenu" size="x-small"></v-icon>
              {{ project.name }} - {{ date }}
            </v-card-title>
            <v-card-text> {{ project.description }}</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
              <v-card>
                <v-card-title
                  ><v-icon :icon="mdiExclamationThick" size="x-small"></v-icon
                  >アクション</v-card-title
                >
                <v-card-text>行動の説明</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title
                  ><v-icon :icon="mdiBookmark" size="x-small"></v-icon
                  >タグ</v-card-title
                >
                <v-tab>a</v-tab>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="timeline">
      <v-col cols="12">
        <ToggleBtn></ToggleBtn>
      </v-col>
    </section>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 1fr;
}

.timeline {
  padding: 2%;
  border-radius: 10px;
}

@media (max-width: 1500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.title {
  font-size: 24px;
}

.v-card {
  z-index: 3;
}

.v-card-title {
  font-size: 12px;
  color: gray;
}
.v-card-text {
  font-size: 16px;
  max-width: 100%;
}

.video-player {
  aspect-ratio: 16/9;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
}

// FIXME: これでいいのか？
@container (max-width: 2000px) {
  video {
    height: 100%;
    width: auto;
  }
}
</style>
