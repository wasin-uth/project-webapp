<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
