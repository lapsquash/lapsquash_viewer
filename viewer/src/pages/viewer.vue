<script setup lang="ts">
const route = useRoute();
// パスパラメータよりid取得
const { id } = route.params;
</script>
<template>
  <h1>プロジェクトID: {{ id }}</h1>
</template>
