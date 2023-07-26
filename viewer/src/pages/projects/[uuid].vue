<script setup>
import { mdiBookmark, mdiExclamationThick, mdiMenu } from "@mdi/js";
const router = useRoute();
console.log(router.params.uuid);
</script>

<template>
  <div>
    <p>プロジェクトID: {{ $route.params["uuid"] }}</p>
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
              <v-card>
                <div class="video-player">
                  <video
                    src="../../assets/sample/assets/0.mp4"
                    muted
                    loop
                    autoplay
                  ></video>
                </div>
              </v-card>
            </v-col>
            <v-col>
              <v-sheet height="300">
                <timeline></timeline>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4">
              <v-card>
                <v-card-title>
                  <v-icon :icon="mdiMenu" size="x-small"></v-icon>
                  説明
                </v-card-title>
                <v-card-text
                  >ここはプロジェクトの説明です。<br />横とサイズ合わせたい。</v-card-text
                >
              </v-card>
            </v-col>
            <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4" class="pa-0">
              <v-col>
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
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.v-card-title {
  font-size: 12px;
  color: gray;
}
.v-card-text {
  font-size: 16px;
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
