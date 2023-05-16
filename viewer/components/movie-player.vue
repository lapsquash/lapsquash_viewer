<script lang="ts">
</script>

<template>
  <div>
    <v-card class="card-player" cols="8" width="70%">
      <v-responsive :aspect-ratio="16 / 9">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/gYeR71UgDQc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          ></iframe>
      </v-responsive>
    </v-card>
  </div>
</template>

<style>
.card-player {
  margin-top: 2%;
}
</style>