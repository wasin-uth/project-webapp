<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <DataTableFB />
        </v-col>
        <v-col cols="12">
          <DataTableFG />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import DataTableFB from "@/components/admin/DataTableFB.vue";
import DataTableFG from "@/components/admin/DataTableFG.vue";

export default {
  components: { DataTableFB, DataTableFG },
};
</script>
