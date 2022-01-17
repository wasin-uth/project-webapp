<template>
  <div id="layouts">
    <Bar/>
    <Sidebar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from "../components/navigation/Sidebar.vue";
import Footer from "../components/footer/Footer.vue";
import Bar from '../components/navigation/Bar.vue';

export default {
  components: {
    Sidebar,
    Footer,
    Bar,
  },
};
</script>

<style scoped>
#layouts {
  overflow: hidden;
}
</style>
