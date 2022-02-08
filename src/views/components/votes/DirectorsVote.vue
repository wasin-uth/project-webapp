<template>
  <Layouts>
    <div>
      <Bar />
    </div>
    <section class="px-2 pt-10 pb-15" style="overflow: hidden">
      <v-row dense>
        <!-- Freshy Boy -->
        <v-col cols="12" md="6">
          <v-slide-group
            dark
            class="pa-0"
            center-active
            show-arrows
            prev-icon="mdi-moon-waning-crescent"
            next-icon="mdi-moon-waxing-crescent"
          >
            <v-slide-item
              v-for="(item, i) in fb"
              :key="i"
              v-slot="{ active, toggle }"
            >
              <v-card
                class="card ma-1"
                height="340"
                width="190"
                @click="toggle"
                :color="active ? 'secondary' : 'grey lighten-1'"
              >
                <v-img :src="item.profile" height="100%">
                  <v-card-actions class="shadow">
                    <v-card-text>
                      <p>
                        <b>{{ item.cId }}</b>
                        <span>น้อง{{ item.nickName }}</span>
                        <br />
                        {{ item.faculty }}
                      </p>
                    </v-card-text>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>

        <!-- Freshy Girl -->
        <v-col cols="12" md="6">
          <v-slide-group
            dark
            class="pa-0"
            center-active
            show-arrows
            prev-icon="mdi-moon-waning-crescent"
            next-icon="mdi-moon-waxing-crescent"
          >
            <v-slide-item
              v-for="(item, i) in fg"
              :key="i"
              v-slot="{ active, toggle }"
            >
              <v-card
                class="card ma-1"
                height="340"
                width="190"
                @click="toggle"
                :color="active ? 'secondary' : 'grey lighten-1'"
              >
                <v-img :src="item.profile" height="100%">
                  <v-card-actions class="shadow">
                    <v-card-text>
                      <p>
                        <b>{{ item.cId }}</b>
                        <span>น้อง{{ item.nickName }}</span>
                        <br />
                        {{ item.faculty }}
                      </p>
                    </v-card-text>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>

        <v-col cols="12">
          <v-sheet class="my-5 mx-2 pa-5" rounded="lg" color="black" dark>
            <p>
              &nbsp;&nbsp;&nbsp; Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Exercitationem excepturi voluptate esse
              consectetur facilis, assumenda ex minima blanditiis nulla
              laboriosam et eveniet atque quis iste, iusto molestias quos
              repellendus adipisci.
            </p>
          </v-sheet>
        </v-col>

        <!-- Vote -->
        <v-col cols="12">
          <v-sheet
            class="ma-2 mb-10"
            dark
            width="100%"
            color="black"
            rounded="lg"
          >
            <form @submit.prevent="sendMessage">
              <v-row>
                <v-col class="pa-5" cols="6">
                  <v-select
                    :items="fb"
                    item-text="select"
                    label="Vote Freshy Boy"
                    v-model="freshyboy"
                    outlined
                    dark
                    clearable
                    color="gold"
                  ></v-select>
                </v-col>
                <v-col class="pa-5" cols="6">
                  <v-select
                    :items="fg"
                    item-text="select"
                    label="Vote Freshy Girl"
                    v-model="freshygirl"
                    outlined
                    dark
                    clearable
                    color="gold"
                  ></v-select>
                </v-col>

                <v-col class="pa-5" cols="12">
                  <v-text-field
                    type="text"
                    v-model="name"
                    label="กรอกชื่อกรรมการ"
                    outlined
                    color="gold"
                    clearable
                  ></v-text-field>
                </v-col>

                <!-- Vote Content -->
                <v-col class="pa-5" cols="12">
                  <template>
                    <div class="text-center">
                      <v-dialog v-model="dialog" width="1000">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            @click="dialog = false"
                            v-bind="attrs"
                            v-on="on"
                            block
                            color="gold"
                            dark
                            :disabled="name == ''"
                          >
                            VOTE
                          </v-btn>
                        </template>

                        <v-card class="pa-3" color="light" light>
                          <v-card-title class="pb-3 px-2">
                            <v-row class="text-center">
                              <v-col> ยืนยันการโหวต </v-col>
                            </v-row>
                          </v-card-title>
                          <v-divider light class="mx-15"></v-divider>
                          <v-card-text
                            v-if="freshyboy != '' && freshygirl != ''"
                          >
                            <v-layout
                              align-center
                              justify-center
                              style="
                                height: 100px;
                                font-size: 18px;
                                color: black;
                              "
                            >
                              <b>Freshy Boy : ( {{ freshyboy }} ) </b>
                              &nbsp; กับ &nbsp;
                              <b>Freshy Girl : ( {{ freshygirl }} ) </b>
                            </v-layout>
                          </v-card-text>

                          <v-card-actions>
                            <v-row>
                              <v-col cols="6" class="pa-2">
                                <v-btn
                                  color="red"
                                  block
                                  @click="dialog = false"
                                >
                                  ยกเลิก
                                </v-btn>
                              </v-col>
                              <v-col cols="6" class="pa-2">
                                <v-btn
                                  :disabled="
                                    !freshyboy == null && !freshygirl == null
                                  "
                                  type="submit"
                                  @click="sendMessage"
                                  color="gold"
                                  block
                                >
                                  ยืนยัน
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </template>
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
      dialog: false,
      value: "",

      user: auth.currentUser,
      freshyboy: "ไม่ประสงค์ลงคะแนน",
      freshygirl: "ไม่ประสงค์ลงคะแนน",
      name: "",
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
                    " น้อง" +
                    doc.data().nickName +
                    " คณะ" +
                    doc.data().faculty,
                  faculty: doc.data().faculty,
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
                    " น้อง" +
                    doc.data().nickName +
                    " คณะ" +
                    doc.data().faculty,
                  faculty: doc.data().faculty,
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

    db.collection("/drtVote")
      .get()
      .then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (this.user.email === doc.data().email) {
              alert("คุณได้โหวตไปแล้ว");
              this.$router.replace("/vote");
            }
          });
        },
        (err) => {
          console.log(err);
        }
      );
  },
  methods: {
    async sendMessage() {
      const voteInfo = {
        voteFB: this.freshyboy,
        voteFG: this.freshygirl,
        name: this.name,
        email: this.user.email,
        createdAt: new Date().toLocaleString(),
      };
      await db
        .collection("/drtVote")
        .add(voteInfo)
        .then(
          () => {
            alert("โหวตสำเร็จ");
            this.$router.replace("/vote");
          },
          (err) => {
            console.log(err);
          }
        );
      this.freshyboy = "";
      this.freshygirl = "";
      this.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}

.card {
  position: relative;
  .shadow {
    background: transparent;
    background: linear-gradient(0deg, #000000 0%, #000000ff 10%, #00000000 50%);
    width: 100%;
    height: 100%;
    p {
      padding: 10px !important;
      position: absolute;
      bottom: 0;
      font-size: 14px;
      span {
        font-size: 18px;
      }
      b {
        font-size: 24px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
