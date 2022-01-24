<template>
  <AdminLayouts>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6">
          <FreshyBoy />
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <FreshyGirl />
        </v-col>
      </v-row>
    </v-container>
  </AdminLayouts>
</template>

<script>
import AdminLayouts from "@/layouts/AdminLayouts.vue";
import FreshyBoy from "@/components/admin/image-vote/FB.vue";
import FreshyGirl from "@/components/admin/image-vote/FG.vue";

export default {
  components: {
    AdminLayouts,
    FreshyBoy,
    FreshyGirl,
  },
};
</script>
