<script setup lang="ts">
const selectedIndex = ref(1);
</script>
<template>
  <div>
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-btn-toggle
            rounded="xl"
            mandatory
            v-model="selectedIndex"
            color="blue"
          >
            <v-btn @click="selectedIndex = 0">タイムライン表示</v-btn>
            <v-btn @click="selectedIndex = 1">ダイジェスト表示</v-btn>
          </v-btn-toggle>
        </v-row>
        <v-row class="scroll" justify="center">
          <div v-if="selectedIndex === 0" class="width100">
            <ScreenTimeline></ScreenTimeline>
          </div>
          <div v-if="selectedIndex === 1" class="width100">
            <ScreenDigest></ScreenDigest>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped lang="scss">
.v-btn-toggle {
  filter: drop-shadow(2px 2px 4px rgba(114, 142, 171, 0.1))
    drop-shadow(-6px -6px 20px #fff)
    drop-shadow(4px 4px 20px rgba(111, 140, 176, 0.41));
  border-radius: 0%;
}

.v-btn {
  border-radius: 0% !important;
}

.width100 {
  width: 100%;
}
.scroll {
  overflow-y: auto;
  height: 75vh;
}

.scroll::-webkit-scrollbar {
  width: 8px;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: rgb(147, 204, 255);
  border-radius: 100px;
}

@media (max-width: 1500px) {
  .scroll {
    overflow-y: auto;
    height: 400px;
  }
}
</style>
