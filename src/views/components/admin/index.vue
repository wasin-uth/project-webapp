<template>
  <AdminLayouts>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="votes"
        
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </AdminLayouts>
</template>

<script>
import AdminLayouts from "@/layouts/AdminLayouts.vue";
import { db } from "@/database/firebase.js";

export default {
  components: {
    AdminLayouts,
  },
  data() {
    return {
      headers: [
        {
          text: "อีเมลล์",
          align: "start",
          // sortable: false,
          value: "email",
        },
        { text: "เฟรชชี่บอยที่เลือก", value: "voteFB" },
        { text: "เฟรชชี่เกิร์ลที่เลือก", value: "voteFG" },
      ],

      votes: [],
    };
  },
  created() {
    db.collection("/stdVote")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  email: doc.data().email,
                  userId: doc.data().userId,
                  voteFB: doc.data().voteFB,
                  voteFG: doc.data().voteFG,
                },
              ];
            }
          });
          this.votes = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>
