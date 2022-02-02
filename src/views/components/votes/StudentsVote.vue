<template>
  <Layouts>
    <div>
      <Bar />
    </div>
    <section class="pa-5 pb-15">
      <v-row>
        <v-col cols="6">
          <v-slide-group
            dark
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
          >
            <v-slide-item v-for="(item, i) in fb" :key="i">
              <v-card class="ma-4" height="200" width="100">
                <v-img :src="item.profile" height="200">
                  <v-card-actions>
                    <v-card-text>
                      {{ item.cId }} {{ item.nickName }}
                    </v-card-text>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col cols="6">
          <v-slide-group
            dark
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
          >
            <v-slide-item v-for="(item, i) in fg" :key="i">
              <v-card class="ma-4" height="200" width="100">
                <v-img :src="item.profile" height="200"></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12">
          <v-sheet dark width="100%" color="transparent">
            <form @submit.prevent="sendMessage">
              <v-row>
                <v-col class="pa-2" cols="6">
                  <v-select
                    :items="fb"
                    item-text="cId"
                    label="Vote"
                    v-model="freshyboy"
                    outlined
                    dark
                  ></v-select>
                </v-col>
                <v-col class="pa-2" cols="6">
                  <v-select
                    :items="fg"
                    item-text="cId"
                    label="Vote"
                    v-model="freshygirl"
                    outlined
                    dark
                  ></v-select>
                </v-col>
                <v-col class="pa-2" cols="12">
                  <v-btn :disabled="!freshygirl" type="submit" block>
                    Vote
                  </v-btn>
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
      user: auth.currentUser,
      freshyboy: "",
      freshygirl: "",
      fb: [],
      fg: [],
    };
  },
  created() {
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
      const messageInfo = {
        userId: this.user.uid,
        voteFB: this.freshyboy,
        voteFG: this.freshygirl,
        email: this.user.email,
        createdAt: new Date().toLocaleString(),
      };
      await db.collection("messages").add(messageInfo);
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
