<template>
  <AdminLayouts>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <v-card>
            <v-toolbar elevation="0" color="gold">
              <v-toolbar-title style="color: black">
                Students Vote
              </v-toolbar-title>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="std"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card>
            <v-toolbar elevation="0" color="gold">
              <v-toolbar-title style="color: black">
                Directors Vote
              </v-toolbar-title>
              
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="drt"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
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

      std: [],
      drt: [],
    };
  },
  created() {
    // Students
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
          this.std = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );

    // Directors
    db.collection("/drtVote")
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
          this.drt = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>
