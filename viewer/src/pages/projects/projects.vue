<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      { title: "Project 1", tag: ["tag1", "egg"], uuid: "1234" },
      { title: "Project 2", tag: ["tag2"], uuid: "2345" },
      { title: "Project 3", tag: ["tag3"], uuid: "3456" },
      { title: "Project 4", tag: ["tag4"], uuid: "4567" },
    ]);

    const router = useRouter();

    const goToProject = () => {
      // ここでプロジェクトのIDを受け取ってprojectIDのページに遷移する
      router.push({
        path: `/projects/:projectID`,
      });
    };

    return {
      items,
      goToProject,
    };
  },
};
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
        >
          <v-card class="rounded-lg" @click="goToProject()">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
              cover
            ></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
              <v-divider class="mx-4"></v-divider>
            </v-card-text>
            <v-chip-group>
              <v-chip
                v-for="tag in item.tag"
                :key="tag"
                label
                color="primary"
                class="ma-2"
              >
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
