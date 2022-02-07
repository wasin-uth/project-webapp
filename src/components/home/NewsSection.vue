<template>
  <div>
    <section class="pb-15" style="overflow: hidden">
      <v-row>
        <v-layout align-center justify-center style="height: 100%">
          <v-sheet
            color="transparent"
            width="90%"
            height="80%"
            class="ma-10 my-15"
            light
          >
            <v-row>
              <v-col cols="12">
                <v-card
                  color="transparent"
                  height="200"
                  style="overflow: hidden"
                  rounded="lg"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-img
                      src="https://i.pinimg.com/originals/40/eb/71/40eb71374bfd72140300dbd8c8e5ba4a.gif"
                      width="100%"
                    ></v-img>
                  </v-row>
                </v-card>
              </v-col>

              <!-- Freshy Boy -->
              <v-col cols="12" lg="6" md="6">
                <v-card class="text-center ma-2" color="transparent" dark>
                  <h1 style="color: #ffffff !important">Freshy Boy</h1>
                </v-card>
                <v-card rounded="lg">
                  <v-simple-table v-model="onboarding">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">รหัสเฟรชชี่</th>
                          <th class="text-center">โปรไฟล์</th>
                          <th class="text-left">คณะ</th>
                          <th class="text-center" style="color: red !important">
                            ยอดกดถูกใจ
                          </th>
                          <th
                            class="text-center"
                            style="color: #c29e59 !important"
                          >
                            คะแนน <br />
                            Popular Vote
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in freshyboy" :key="i.id">
                          <td>{{ item.cId }}</td>
                          <td>
                            <v-avatar size="40" rounded="lg">
                              <v-img :src="item.profile"></v-img>
                            </v-avatar>
                          </td>
                          <td>{{ item.faculty }}</td>
                          <td>
                            <v-btn color="red" to="/contestants/2019">
                              {{ item.count }}
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              color="gold lighten-1"
                              to="/vote/popular-vote"
                            >
                              {{ item.count }}
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>

              <!-- Freshy Girl -->
              <v-col cols="12" lg="6" md="6">
                <v-card class="text-center ma-2" color="transparent" dark>
                  <h1 style="color: #ffffff !important">Freshy Girl</h1>
                </v-card>
                <v-card rounded="lg">
                  <v-simple-table v-model="onboarding">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">รหัสเฟรชชี่</th>
                          <th class="text-center">โปรไฟล์</th>
                          <th class="text-left">คณะ</th>
                          <th class="text-center" style="color: red !important">
                            ยอดกดถูกใจ
                          </th>
                          <th
                            class="text-center"
                            style="color: #c29e59 !important"
                          >
                            คะแนน <br />
                            Popular Vote
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in freshygirl" :key="i.id">
                          <td>{{ item.cId }}</td>
                          <td>
                            <v-avatar size="40" rounded="lg">
                              <v-img :src="item.profile"></v-img>
                            </v-avatar>
                          </td>
                          <td>{{ item.faculty }}</td>
                          <td>
                            <v-btn color="red" to="/contestants/2019">
                              {{ item.count }}
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              color="gold lighten-1"
                              to="/vote/popular-vote"
                            >
                              {{ item.count }}
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-layout>
      </v-row>
    </section>
  </div>
</template>

<script>
import { db } from "@/database/firebase.js";

export default {
  data() {
    return {
      freshyboy: [],
      freshygirl: [],
    };
  },
  created() {
    // Freshy Boy
    db.collection("/rmufreshyboyandgirl/2019/image-vote-fb")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: parseInt(doc.data().no),
                  cId: doc.data().cId,
                  profile: doc.data().image,
                  faculty: doc.data().faculty,
                  count: 0,
                },
              ];
            }
          });
          this.freshyboy = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );

    // Freshy Girl
    db.collection("/rmufreshyboyandgirl/2019/image-vote-fg")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: parseInt(doc.data().no),
                  cId: doc.data().cId,
                  profile: doc.data().image,
                  faculty: doc.data().faculty,
                  count: 0,
                },
              ];
            }
          });
          this.freshygirl = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>

<style scoped>
* {
  color: #000000 !important;
}
</style>
