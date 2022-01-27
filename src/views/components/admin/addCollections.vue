<template>
  <AdminLayouts>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <SetOne />
        </v-col>
        <v-col cols="12" sm="6">
          <SetTwo />
        </v-col>
        <v-col cols="12" sm="6">
          <SetThree />
        </v-col>
        <v-col cols="12" sm="6">
          <SetFour />
        </v-col>
      </v-row>
    </v-container>
  </AdminLayouts>
</template>

<script>
import AdminLayouts from "@/layouts/AdminLayouts.vue";
import SetOne from "@/components/admin/collections/SetOne.vue";
import SetTwo from "@/components/admin/collections/SetTwo.vue";
import SetThree from "@/components/admin/collections/SetThree.vue";
import SetFour from "@/components/admin/collections/SetFour.vue";

export default {
  components: {
    AdminLayouts,
    SetOne,
    SetTwo,
    SetThree,
    SetFour,
  },
};
</script>
