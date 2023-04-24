<script setup lang="ts">
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card width="500" title="ID">
            <v-form @submit.prevent>
              <v-text-field
                label="First name"
              ></v-text-field>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style></style>
