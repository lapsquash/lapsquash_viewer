<script setup>
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
            <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
              <v-card
              class="video-player">
                <video
                  src="../../assets/sample/assets/0.mp4"
                  autoplay="true"
                  loop="true"
                  muted
                  controls
                ></video>
              </v-card>
            </v-col>
          </v-row>
          <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="3">
            <v-card>
              <v-card-title>説明</v-card-title>
              <v-card-text>ここはプロジェクトの説明です。</v-card-text>
            </v-card>
          </v-col>
          <v-row>
            <v-col>
              <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="3">
                <v-card>
                  <v-card-title>アクション</v-card-title>
                  <v-card-text>行動の説明</v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="3">
                <v-card>
                  <v-card-title>タグ</v-card-title>
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

<style>
.v-card-title {
  font-size: 12px;
}
.v-card-text {
  font-size: 16px;
}

.video {
  object-fit: cover;
}

.video-player {
  aspect-ratio: 16/9;
  z-index: 1;
}
</style>
