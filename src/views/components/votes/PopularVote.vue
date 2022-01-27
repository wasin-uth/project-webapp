<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <!-- contents -->
    <section class="pb-15">
      <v-item-group class="back">
        <!-- <v-row dense v-model="selected"> -->
        <v-row>
          <!-- Freshy Boy -->
          <v-col class="pa-2" cols="6">
            <v-container>
              <v-row dense>
                <v-col
                  class="pa-2"
                  cols="12"
                  lg="4"
                  md="6"
                  sm="6"
                  v-for="(item, i) in fbvote"
                  :key="i"
                >
                  <v-card class="content" dark>
                    <v-img
                      class="card-contests"
                      :src="item.profile"
                      lazy-src="@/assets/image/lazy_src.png"
                      height="300px"
                    >
                      <div class="shadow-inset"></div>
                    </v-img>
                    <!-- title-content -->
                    <div class="text-name px-2">
                      <h1 class="id" style="text-transform: uppercase">
                        {{ item.cId }} {{ item.nickName }}
                      </h1>
                      <h5 class="name">{{ item.name }} {{ item.lastName }}</h5>
                    </div>
                    <!-- header-content -->
                    <div class="list-active">
                      <v-card-title class="px-2 py-1">
                        <div cols="12" class="head-title text-center">
                          <h1 class="vote">VOTE</h1>
                        </div>
                      </v-card-title>
                    </div>
                    <!-- footer-content || button -->
                    <div class="list-active-2">
                      <v-card-actions class="pa-2">
                        <v-dialog width="500">
                          <template v-slot:activator="{ attrs, on }">
                            <v-btn
                              block
                              class="btn"
                              v-bind="attrs"
                              v-on="on"
                              light
                            >
                              <v-img
                                src="https://www.gump.in.th/uploaded_files/img/TAN/wallet-logo.png"
                                max-height="60"
                                max-width="60"
                              ></v-img>
                            </v-btn>
                          </template>

                          <!-- dialog-content -->
                          <v-card class="pa-10" light>
                            <v-img
                              class="qr_code"
                              :src="item.qrcode"
                              contain
                              width="300"
                            ></v-img>
                            <div class="text-center pt-5">
                              <h1>น้อง {{ item.nickName }}</h1>
                              <h4>
                                ร่วมโหวตให้กับผู้เข้าประกวด เพียงสแกน QR Code
                                บนแอพ
                                <br />
                                <span style="color: #dd0303 !important">
                                  True
                                </span>
                                <span style="color: #ffb834 !important"
                                  >Money</span
                                >
                                Wallet
                              </h4>
                              <h4 class="warning">1 บาท = 1 คะแนน</h4>
                            </div>
                          </v-card>
                        </v-dialog>
                      </v-card-actions>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <!-- Freshy Girl -->
          <v-col class="pa-2" cols="6">
            <v-container>
              <v-row dense>
                <v-col
                  class="pa-2"
                  cols="12"
                  lg="4"
                  md="6"
                  sm="6"
                  v-for="(item, i) in fgvote"
                  :key="i"
                >
                  <v-card class="content" dark>
                    <v-img
                      class="card-contests"
                      :src="item.profile"
                      lazy-src="@/assets/image/lazy_src.png"
                      height="300px"
                    >
                      <div class="shadow-inset"></div>
                    </v-img>
                    <!-- title-content -->
                    <div class="text-name px-2">
                      <h1 class="id" style="text-transform: uppercase">
                        {{ item.cId }} {{ item.nickName }}
                      </h1>
                      <h5 class="name">{{ item.name }} {{ item.lastName }}</h5>
                    </div>
                    <!-- header-content -->
                    <div class="list-active">
                      <v-card-title class="px-2 py-1">
                        <div cols="12" class="head-title text-center">
                          <h1 class="vote">VOTE</h1>
                        </div>
                      </v-card-title>
                    </div>
                    <!-- footer-content || button -->
                    <div class="list-active-2">
                      <v-card-actions class="pa-2">
                        <v-dialog width="500">
                          <template v-slot:activator="{ attrs, on }">
                            <v-btn
                              block
                              class="btn"
                              v-bind="attrs"
                              v-on="on"
                              light
                            >
                              <v-img
                                src="https://www.gump.in.th/uploaded_files/img/TAN/wallet-logo.png"
                                max-height="60"
                                max-width="60"
                              ></v-img>
                            </v-btn>
                          </template>

                          <!-- dialog-content -->
                          <v-card class="pa-10" light>
                            <v-img
                              class="qr_code"
                              :src="item.qrcode"
                              contain
                              width="300"
                            ></v-img>
                            <div class="text-center pt-5">
                              <h1>น้อง {{ item.nickName }}</h1>
                              <h4>
                                ร่วมโหวตให้กับผู้เข้าประกวด เพียงสแกน QR Code
                                บนแอพ
                                <br />
                                <span style="color: #dd0303 !important">
                                  True
                                </span>
                                <span style="color: #ffb834 !important"
                                  >Money</span
                                >
                                Wallet
                              </h4>
                              <h4 class="warning">1 บาท = 1 คะแนน</h4>
                            </div>
                          </v-card>
                        </v-dialog>
                      </v-card-actions>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-item-group>
    </section>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";
import Bar from "@/components/navigation/BarContents.vue";
import { db } from "@/database/firebase.js";

export default {
  name: "Home",
  components: {
    Layouts,
    Bar,
  },
  data() {
    return {
      id: 2021,
      dialog: false,
      selected: [],

      fbvote: [],
      freshyBoy: [],
      fgvote: [],
      freshyGirl: [],
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
                  id: doc.id,
                  no: doc.data().no,
                  profile: doc.data().profile,
                  cId: doc.data().cId,
                  name: doc.data().name,
                  lastName: doc.data().lastName,
                  nickName: doc.data().nickName,
                  qrcode: doc.data().qrcode,
                  fb: db
                    .collection("/rmufreshyboyandgirl/2019/image-vote-fb")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.id == doc.id) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                id: doc.id,
                                no: doc.data().no,
                                image: doc.data().image,
                              },
                            ];
                          }
                        });
                        this.freshyBoy = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            }
          });
          this.fbvote = tempDataArray;
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
                  id: doc.id,
                  no: doc.data().no,
                  profile: doc.data().profile,
                  cId: doc.data().cId,
                  name: doc.data().name,
                  lastName: doc.data().lastName,
                  nickName: doc.data().nickName,
                  qrcode: doc.data().qrcode,
                  fb: db
                    .collection("/rmufreshyboyandgirl/2019/image-vote-fg")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                id: doc.id,
                                no: doc.data().no,
                                image: doc.data().image,
                              },
                            ];
                          }
                        });
                        this.freshyGirl = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            }
          });
          this.fgvote = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
  text-decoration: none;
}

$main_color: #ebebeb;
$yellow_color: #ffb834;
$red_color: #b30000;
$back_color: #000000;

.id,
.name,
.vote {
  color: $main_color !important;
}

// Contests
.content {
  background-color: $back_color;
  backdrop-filter: blur(50px);
  transition: 0.4s;
  .shadow-inset {
    box-shadow: inset 0px -80px 50px -10px $back_color;
    width: 100%;
    height: 100%;
  }
  .text-name {
    position: absolute;
    bottom: 25%;
    width: 100%;
    height: 20%;
  }
  .head-title {
    font-weight: bold;
    font-size: 18px;
    margin: 0 auto !important;
  }
  .btn:hover {
    box-shadow: inset 3px 3px 0px $yellow_color, -3px -3px 0px $red_color,
      inset -3px -3px 0px $yellow_color, 3px 3px 0px $red_color,
      inset 3px -3px 0px $yellow_color, -3px 3px 0px $red_color,
      inset -3px 3px 0px $yellow_color, 3px -3px 0px $red_color !important;
  }
}

.qr_code {
  margin: 0 auto !important;
}
</style>
