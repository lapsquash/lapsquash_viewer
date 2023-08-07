<script lang="ts">
const fs = require("fs");
const dirs = fs.readdirSync("./src/assets/projects");
interface projects {
  name: string;
  description: string;
  version: number;
  startWith: string;
  tags: string[];
  counter: number;
  uuid: string;
}
const projects: projects[] = [];
for (const dir of dirs) {
  const json = fs.readFileSync(`./src/assets/projects/${dir}/manifest.json`);
  const manifests = JSON.parse(json);

  const date = new Date(manifests.startWith).toLocaleString("ja-JP", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const counter = manifests.assets.length;
  projects.push({
    name: manifests.name,
    description: manifests.description,
    version: manifests.version,
    startWith: date,
    tags: manifests.tags,
    counter: counter,
    uuid: dir,
  });
}

console.log(projects);
export default {
  setup() {
    const router = useRouter();

    const goToProject = (uuid: any) => {
      router.push({
        path: `/projects/${uuid}`,
      });
    };

    return {
      projects,
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
            <search-bar />
          </v-row>
          <v-row>
            <v-col
              v-for="project in projects"
              :key="project.name"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="4"
              xl="3"
            >
              <v-card
                class="rounded-lg"
                @click="goToProject(project.uuid)"
                :key="project.name"
                color="#E3EDF7"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="150px"
                  cover
                ></v-img>
                <v-card-title
                  >{{ project.name }}
                  <v-badge
                    color="info"
                    :content="project.counter"
                    inline
                  ></v-badge>
                  <p class="uuid">id:{{ project.uuid }}</p></v-card-title
                >
                <v-card-text>
                  {{ project.description }}
                </v-card-text>
                <v-chip-group>
                  <v-chip
                    v-for="tag in project.tags"
                    :key="tag"
                    label
                    color="primary"
                    class="ma-2"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
                <p class="date pa-2">{{ project.startWith }}</p>
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
  box-shadow: 2px 2px 4px 0px rgba(114, 142, 171, 0.1), -6px -6px 20px 0px #fff,
    4px 4px 20px 0px rgba(111, 140, 176, 0.41);
}

.uuid {
  font-size: 10px;
}

.date {
  font-size: 10px;
  margin-right: 10px;
  text-align: right;
}

input::placeholder {
  text-align: left;
  padding-left: 10px;
}

input {
  width: 100%;
  height: 100%;
}
</style>
