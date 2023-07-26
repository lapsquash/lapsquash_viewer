<script setup lang="ts">
const selectedIndex = ref(0);
</script>
<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-btn-toggle
            rounded="xl"
            mandatory
            v-model="selectedIndex"
            color="blue"
          >
            <v-btn>タイムライン表示</v-btn>
            <v-btn>ダイジェスト表示</v-btn>
          </v-btn-toggle>
        </v-row>
        <v-row>
          <v-card>
            <v-card-text>text</v-card-text>
          </v-card>
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
}

.v-btn {
  border-radius: 0;
}
</style>
