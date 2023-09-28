<script setup lang="ts">
import { sampleProject } from "@/assets/sample_pj";
import { Project } from "@/types/project";

const projects: Project[] = [sampleProject, sampleProject, sampleProject];

const router = useRouter();

const getConnatedTags = (project: Project) => {
  return project.assets
    .map((asset) => asset.analysis.tags)
    .reduce((acc, tags) => acc.concat(tags), []);
};

const goToProject = (uuid: number) => {
  router.push({ path: `/projects/${uuid}` });
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
                class="rounded-lg hover-shadow"
                @click="goToProject(project.startWith)"
                :key="project.name"
                color="#E3EDF7"
              >
                <div class="video-player">
                  <video
                    :src="`../../assets/projects/${project.startWith}/assets/0.mp4`"
                    muted
                  ></video>
                </div>
                <v-card-title
                  >{{ project.name }}
                  <v-badge
                    color="info"
                    :content="project.assets.length"
                    inline
                  ></v-badge>
                  <p class="uuid">id:{{ project.startWith }}</p></v-card-title
                >
                <v-card-text>
                  {{ project.description }}
                </v-card-text>
                <v-chip-group>
                  <v-chip
                    v-for="tag in getConnatedTags(project)"
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
  transition: all 1s ease-in-out;
}

.hover-shadow:hover {
  box-shadow: 2px 2px 4px 0px rgba(26, 137, 255, 0.801),
    -6px -6px 20px 0px #9cffff, 4px 4px 20px 0px rgba(111, 140, 176, 0.41);
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

video {
  justify-content: center;
  align-items: center;
}

.video-player {
  aspect-ratio: 16/9;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
  height: 100%;
  padding-bottom: 1px;
}

@container (max-width: 2000px) {
  video {
    height: 100%;
    width: auto;
  }
}
</style>
