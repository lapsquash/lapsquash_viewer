<script setup lang="ts">
import { Project } from "@/types/project";

const props = defineProps<{
  project: Project;
}>();

const assets = props.project.assets;

const sampleMovieUrl =
  "https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Ao_Nang_Beach_Yoga_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.mp4";

function selectMovie(i: number) {
  console.log(i);
  const video = document.querySelector("video");
  video?.pause();
  video?.setAttribute("src", sampleMovieUrl);
  video?.load();
  video?.play();
}
</script>
<template>
  <div class="digest">
    <v-card class="pa-3">
      <v-row v-for="(_, i) in assets" :key="project.startWith">
        <v-col cols="12">
          <v-card @click="selectMovie(i)" class="timeCard">
            <v-row>
              <v-col class="center">
                <div class="video-player">
                  <video :src="sampleMovieUrl" muted></video>
                </div>
              </v-col>
              <v-col
                ><!-- FIXME:yyyy/mm/dd hh:mm:ssが変化しない -->
                <v-card-title class="number text-right">{{ i }} </v-card-title>
              </v-col>
            </v-row>
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
  padding: 0;
  border-left: 2px solid #0478ff;
  border-right: 2px solid #50caff;
}
.timeCard::before,
.timeCard::after {
  content: "";
  display: block;
  height: 2px;
  background: linear-gradient(to right, #0478ff 0%, #50caff 100%);
}

.timeCard:active {
  padding: 0;
  border-left: 2px solid #7104ff;
  border-right: 2px solid #5062ff;
}

.timeCard:active::before,
.timeCard:active::after {
  content: "";
  display: block;
  height: 2px;
  background: linear-gradient(to right, #7104ff 0%, #5062ff 100%);
}

.digest {
  padding-top: 12px;
}

video {
  justify-content: center;
  align-items: center;
}

.number {
  font-size: 40px;
  color: blue;
  opacity: 10%;
  margin-top: 5px;
}

.video-player {
  aspect-ratio: 16/9;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
  height: 100%;
  padding-bottom: 1px;
}

// FIXME: これでいいのか？
@container (max-width: 2000px) {
  video {
    height: 100%;
    width: auto;
  }
}
</style>
