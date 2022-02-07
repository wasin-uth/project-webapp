<template>
  <Layouts>
    <div>
      <Bar />
    </div>
    <section class="pa-5 pb-15">
      <v-row dense>
        <!-- Freshy Boy -->
        <v-col cols="6">
          <v-slide-group dark class="pa-0" center-active show-arrows>
            <v-slide-item
              v-for="(item, i) in fb"
              :key="i"
              v-slot="{ active, toggle }"
            >
              <v-card
                class="ma-2"
                height="200"
                width="100"
                @click="toggle"
                :color="active ? 'success' : 'grey lighten-1'"
              >
                <v-img :src="item.profile" height="200">
                  <v-card-actions>
                    <v-card-text>
                      <span>{{ item.cId }} {{ item.nickName }}</span>
                    </v-card-text>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>

        <!-- Freshy Girl -->
        <v-col cols="6">
          <v-slide-group
            dark
            v-model="model"
            class="pa-0"
            center-active
            show-arrows
          >
            <v-slide-item v-for="(item, i) in fg" :key="i">
              <v-card class="ma-2" height="200" width="100">
                <v-img :src="item.profile" height="200"></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>

        <!-- Vote -->
        <v-col cols="12">
          <v-sheet dark width="100%" color="transparent">
            <form @submit.prevent="sendMessage">
              <v-row>
                <v-col class="pa-2" cols="6">
                  <v-select
                    :items="fb"
                    item-text="select"
                    label="Vote Freshy Boy"
                    v-model="freshyboy"
                    outlined
                    dark
                    clearable
                  ></v-select>
                </v-col>
                <v-col class="pa-2" cols="6">
                  <v-select
                    :items="fg"
                    item-text="select"
                    label="Vote Freshy Girl"
                    v-model="freshygirl"
                    outlined
                    dark
                    clearable
                  ></v-select>
                </v-col>

                <!-- Vote -->
                <v-col class="pa-2" cols="12">
                  <v-btn
                    :disabled="!freshyboy == null && !freshygirl == null"
                    type="submit"
                    block
                  >
                    Vote
                  </v-btn>
                </v-col>

                <!--  -->
                <v-col cols="12">
                  <v-expand-transition>
                    <v-sheet v-if="freshyboy != null" height="200" tile>
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <h3 class="text-h6">Selected {{ freshyboy }}</h3>
                      </v-row>
                    </v-sheet>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </form>
          </v-sheet>
        </v-col>
      </v-row>
    </section>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";
import Bar from "@/components/navigation/BarContents.vue";
import { db, auth } from "@/database/firebase.js";

export default {
  name: "Home",
  components: {
    Layouts,
    Bar,
  },
  data() {
    return {
      model: null,
      modelFB: null,
      value: "",

      user: auth.currentUser,
      freshyboy: "ไม่ประสงค์ลงคะแนน",
      freshygirl: "ไม่ประสงค์ลงคะแนน",
      fb: [],
      fg: [],
    };
  },
  created() {
    // Freshy Boy
    db.collection("/rmufreshyboyandgirl/2019/freshyboy")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  cId: doc.data().cId,
                  nickName: doc.data().nickName,
                  profile: doc.data().profile,
                  select:
                    doc.data().cId +
                    " N'" +
                    doc.data().nickName +
                    " คณะ" +
                    doc.data().faculty,
                },
              ];
            }
          });
          this.fb = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );

    // Freshy Girl
    db.collection("/rmufreshyboyandgirl/2019/freshygirl")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  cId: doc.data().cId,
                  nickName: doc.data().nickName,
                  profile: doc.data().profile,
                  select:
                    doc.data().cId +
                    " N'" +
                    doc.data().nickName +
                    " คณะ" +
                    doc.data().faculty,
                },
              ];
            }
          });
          this.fg = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },
  methods: {
    async sendMessage() {
      const voteInfo = {
        userId: this.user.uid,
        voteFB: this.freshyboy,
        voteFG: this.freshygirl,
        email: this.user.email,
        createdAt: new Date().toLocaleString(),
      };
      await db
        .collection("votes")
        .add(voteInfo)
        .then(
          () => {
            alert("Successful");
          },
          (err) => {
            console.log(err);
          }
        );
      this.freshyboy = "";
      this.freshygirl = "";
    },
    loadOnce() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
