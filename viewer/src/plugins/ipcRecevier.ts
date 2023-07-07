export default defineNuxtPlugin(() => {
  const router = useRouter();

  window.onReceivedIPCMsg("LOAD_URL", (_, routePath) => {
    console.log(`received LOAD_URL: ${routePath}`);
    router.push(routePath);
  });
});
