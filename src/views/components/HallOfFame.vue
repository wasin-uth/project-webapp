<template>
  <Layouts>
    <section>
      <Mouse />
    </section>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";
import Mouse from "@/components/Mouse.vue";

export default {
  name: "Home",
  components: {
    Layouts,
    Mouse,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 auto !important;
  padding: 0 !important;
}
</style>
