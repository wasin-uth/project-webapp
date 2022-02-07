<template>
  <AdminLayouts>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Win />
        </v-col>
        <v-col cols="12">
          <St />
        </v-col>
        <v-col cols="12">
          <Nd />
        </v-col>
        <v-col cols="12">
          <PopularVote />
        </v-col>
        <v-col cols="12">
          <SocialAward />
        </v-col>
      </v-row>
    </v-container>
  </AdminLayouts>
</template>

<script>
import AdminLayouts from "@/layouts/AdminLayouts.vue";
import Win from "@/components/admin/HallOfFame/Win.vue";
import St from "@/components/admin/HallOfFame/1st.vue";
import Nd from "@/components/admin/HallOfFame/2nd.vue";
import PopularVote from "@/components/admin/HallOfFame/PopularVote.vue";
import SocialAward from "@/components/admin/HallOfFame/SocialAward.vue";

export default {
  components: {
    AdminLayouts,
    Win,
    St,
    Nd,
    PopularVote,
    SocialAward,
  },
};
</script>
