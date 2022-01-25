<template>
  <Layouts>
    <!-- section 1 -->
    <div class="section-1">
      <IndexSection />
    </div>

    <!-- section 2 -->
    <div class="section-2">
      <NewsSection />
    </div>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";
import IndexSection from "@/components/home/IndexSection.vue";
import NewsSection from "../components/home/NewsSection.vue";

export default {
  name: "Home",
  components: {
    Layouts,
    IndexSection,
    NewsSection,
  },
};
</script>
