<script lang="ts">
import { ref } from "vue";
const fs = require('fs');
const dirs = fs.readdirSync('./src/assets/projects');

for (const dir of dirs) {
  const json = fs.readFileSync(`./src/assets/projects/${dir}/manifest.json`);
  const manifests = JSON.parse(json);
  console.log(manifests.name);
}

export default {
  setup() {
    interface Project {
      title: string;
      text: string;
      tag: string[];
      uuid: number;
    }

    const items = ref<Project[]>([
      { title: dirs[0], text: "test4", tag: ["tag1", "egg"], uuid: 1234 },
      { title: dirs[1], text: "test3", tag: ["tag2"], uuid: 2345 },
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
        <v-col>
          <v-row>
            <v-card class="search-bar">
              <input
              id="search"
              type="text"
              placeholder="検索">
            </v-card>
          </v-row>
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
                <v-card-title
                  >{{ item.title }}
                  <p class="uuid">id:{{ item.uuid }}</p></v-card-title
                >
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

.uuid {
  font-size: 10px;
}

.search-bar{
  height: 40px;
  width: 100%;
  margin: 50px;
}

input::placeholder{
  text-align: left;
  padding-left: 10px
}

input{
  width: 100%;
  height: 100%;
}
</style>
