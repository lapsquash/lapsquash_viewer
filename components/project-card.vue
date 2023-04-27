<script lang="ts">

type ProjectType = {
  title: string;
  description: string;
  id: number;
};


</script>

<template>
  <div>
      <div>
      <VCard>
        <VImg height="200px" cover />
        <VDivider />
        <VCardTitle> {{ project.title }} </VCardTitle>
        <VCardSubtitle>{{ project.description }}</VCardSubtitle>
      </VCard>
      </div>
  </div>
</template>