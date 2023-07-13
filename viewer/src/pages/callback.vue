<script setup lang="ts">
import { analyzer } from "@/helpers/model/service/client";
import { useConfigStore } from "@/helpers/model/stores/config";

const router = useRouter();
const config = useConfigStore();
const code: string | undefined = router.currentRoute.value.query["code"];
const status = ref<"loading" | "success" | "error" | "codeIsNull">("loading");

onMounted(async () => {
  if (code == null) {
    throw new Error("code is null");
  }

  const redirectUri = useRuntimeConfig().public.redirectUri;
  let credential: string = "";

  try {
    credential = await analyzer.public.auth.getCredential.query({
      code,
      redirectUri,
    });
    if (credential == null) {
      status.value = "codeIsNull";
      return;
    }
  } catch (e) {
    status.value = "error";
    console.error(e);
    return;
  }

  (await config).updateConfig({ credential });

  status.value = "success";
  router.push({ path: "/account" });
});
</script>
<template>
  {{ status }} <br />
  {{ code }}
</template>
<style scoped lang="scss"></style>
