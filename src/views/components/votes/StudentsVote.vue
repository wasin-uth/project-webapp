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
                        <span> น้อง{{ item.nickName }}</span>
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
                        <span> น้อง{{ item.nickName }}</span>
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
          <v-sheet class="bar my-5 mx-2 pa-5" rounded="lg" light>
            <div>
              <h2>ขั้นตอนการโหวต</h2>
              <h3>
                &nbsp;&nbsp;&nbsp;
                ให้ทำการเลือกผู้เข้าประกวดในช่องข้างล่าง เลือกคนที่คุณต้องการจะเลือก
                ถ้าไม่ประสงค์ลงคะแนนก็ไม่ต้องทำการเลือกหรือปล่อยว่างก็จะถือว่าไม่ประสงค์ลงคะแนน
                จากนั้นทำการกดที่ปุ่มโหวต แล้วกดยืนยันได้เลย
              </h3>
            </div>
          </v-sheet>
        </v-col>

        <!-- Vote -->
        <v-col cols="12">
          <v-sheet
            class="bar ma-2 mb-10"
            rounded="lg"
            light
          >
            <form @submit.prevent="sendMessage">
              <v-row>
                <v-col class="pa-5" cols="6">
                  <v-select
                    :items="fb"
                    item-text="cId"
                    label="เลือกเฟรชชี่บอย"
                    v-model="freshyboy"
                    outlined
                    clearable
                    color="gold"
                  ></v-select>
                </v-col>
                <v-col class="pa-5" cols="6">
                  <v-select
                    :items="fg"
                    item-text="cId"
                    label="เลือกเฟรชชี่เกิร์ล"
                    v-model="freshygirl"
                    outlined
                    clearable
                    color="gold"
                  ></v-select>
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
                            color="black"
                            height="50"
                            style="font-size: 20px; color: #c29e59"
                          >
                            โหวต
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
                                font-size: 14px;
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

      <!-- Alert Dialog -->
      <template>
        <!-- Warning -->
        <div class="text-center">
          <v-dialog v-model="warning" width="500" persistent>
            <v-card class="pa-5 pt-10" color="light" light>
              <v-card-text class="text-center">
                <h1>คุณได้โหวตไปแล้ว</h1>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="exit"
                  block
                  class="mt-10"
                  color="red"
                  dark
                  style="font-size: 22px"
                >
                  ออก
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- Success -->
        <div class="text-center">
          <v-dialog v-model="success" width="500" persistent>
            <v-card class="pa-5 pt-10" color="light" light>
              <v-card-text class="text-center">
                <h1>โหวตสำเร็จ</h1>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="exit"
                  block
                  class="mt-10"
                  color="red"
                  dark
                  style="font-size: 22px"
                >
                  ออก
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
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
      warning: false,
      success: false,
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

    db.collection("/stdVote")
      .get()
      .then(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (this.user.email === doc.data().email) {
              // alert("คุณได้โหวตไปแล้ว");
              this.warning = true;
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
        userId: this.user.uid,
        voteFB: this.freshyboy,
        voteFG: this.freshygirl,
        email: this.user.email,
        createdAt: new Date().toLocaleString(),
      };
      await db
        .collection("/stdVote")
        .add(voteInfo)
        .then(
          () => {
            this.message = "โหวตสำเร็จ";
            this.dialog = false;
            this.success = true;
          },
          (err) => {
            console.log(err);
          }
        );
      this.freshyboy = "";
      this.freshygirl = "";
    },

    exit() {
      this.$router.replace("/vote");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}

.bar {
  background-image: linear-gradient(20deg, #ffffff 40%, #c29e59 100%);
  h2 {
    line-height: 2;
    color: #c29e59;
  }
  h3 {
    line-height: 2;
    color: #272727;
  }
}

.card {
  position: relative;
  .shadow {
    background: transparent;
    background: linear-gradient(0deg, #c29e59 0%, #c29e59ff 10%, #00000000 50%);
    width: 100%;
    height: 100%;
    p {
      padding: 10px !important;
      position: absolute;
      bottom: 0;
      font-size: 16px;
      span {
        font-size: 18px;
      }
      b {
        font-size: 36px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
