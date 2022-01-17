<template>
  <Layouts>
    <section>
      <center>
        <h1>404 not found</h1>
        <h2>it seems you're in the wrong page</h2>
      </center>
    </section>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";

export default {
  name: "Home",
  components: {
    Layouts,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
