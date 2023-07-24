<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    interface Project {
      title: string;
      text: string;
      tag: string[];
      uuid: number;
    }

    const items = ref<Project[]>([
      { title: "Project 1", text: "test4", tag: ["tag1", "egg"], uuid: 1234 },
      { title: "Project 2", text: "test3", tag: ["tag2"], uuid: 2345 },
      { title: "Project 3", text: "test2", tag: ["tag3"], uuid: 3456 },
      { title: "Project 4", text: "test1", tag: ["tag4"], uuid: 4567 },
    ]);

    const router = useRouter();

    const goToProject = (uuid: any) => {
      router.push({
        path: `/projects/${uuid}`,
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
          <v-card
            class="rounded-lg"
            @click="goToProject(item.uuid)"
            :key="item.uuid"
            color="#E3EDF7"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
              cover
            ></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              {{ item.text }}
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

<style>
.v-card {
  background-color: #e3edf7;
  filter: drop-shadow(2px 2px 4px rgba(114, 142, 171, 0.1))
    drop-shadow(-6px -6px 20px #fff)
    drop-shadow(4px 4px 20px rgba(111, 140, 176, 0.41));
}
</style>
