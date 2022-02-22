<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <section class="pa-2 pb-15">
      <v-container class="pb-8">
        <!-- Freshy Boy and Girl RMU -->
        <div class="award_winning pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลชนะเลิศ Freshy Boy and Girl</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in rmufreshyboyandgirl"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card class="profile" elevation="10" dark rounded="xl">
                      <v-img
                        class="img"
                        :src="item.image"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1 style="text-transform: uppercase">
                            {{ item.cId }}
                          </h1>
                          <h2>{{ item.reward }} {{ id }}</h2>
                          <h3>{{ item.faculty }}</h3>
                          <h3>
                            {{ item.nickName }} : {{ item.name }}
                            {{ item.lastName }}
                          </h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- 1st-->
        <div class="one_st pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลรองชนะเลิศ อันดับ 1 Freshy Boy and Girl RMU</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in st"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.image"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1 style="text-transform: uppercase">
                            {{ item.cId }}
                          </h1>
                          <h2>{{ item.reward }} {{ id }}</h2>
                          <h3>{{ item.faculty }}</h3>
                          <h3>
                            {{ item.nickName }} : {{ item.name }}
                            {{ item.lastName }}
                          </h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- 2nd -->
        <div class="two_nd pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลรองชนะเลิศ อันดับ 2 Freshy Boy and Girl RMU</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in nd"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.image"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1 style="text-transform: uppercase">
                            {{ item.cId }}
                          </h1>
                          <h2>{{ item.reward }} {{ id }}</h2>
                          <h3>{{ item.faculty }}</h3>
                          <h3>
                            {{ item.nickName }} : {{ item.name }}
                            {{ item.lastName }}
                          </h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- PopularVote -->
        <div class="popular_vote pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัล Popular Vote จากการโหวตผ่าน TrueMoney Wallet</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in popularVote"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.image"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1 style="text-transform: uppercase">
                            {{ item.cId }}
                          </h1>
                          <h2>{{ item.reward }} {{ id }}</h2>
                          <h3>{{ item.faculty }}</h3>
                          <h3>
                            {{ item.nickName }} : {{ item.name }}
                            {{ item.lastName }}
                          </h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- Top 5 -->
        <div class="favorite">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>ผู้เข้าประกวดที่เข้ารอบ 5 คนสุดท้าย</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in topFive"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.image"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1 style="text-transform: uppercase">
                            {{ item.cId }}
                          </h1>
                          <h2>{{ item.reward }} {{ id }}</h2>
                          <h3>{{ item.faculty }}</h3>
                          <h3>
                            {{ item.nickName }} : {{ item.name }}
                            {{ item.lastName }}
                          </h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-container>
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
      id: this.$route.params.id,
      rmufreshyboyandgirl: [],
      st: [],
      nd: [],
      popularVote: [],
      topFive: [],
    };
  },
  created() {
    db.collection("/rmufreshyboyandgirl")
      .get()
      .then(
        (querySnapShot) => {
          let tempDataArray = [];
          querySnapShot.forEach((doc) => {
            if (this.$route.params.id == 2017) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  freshy: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/hall-of-fame/OCaAPC3wMthWXP75nc1s/rmufreshyboyandgirl"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.rmufreshyboyandgirl = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 1st
                  st: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/hall-of-fame/OCaAPC3wMthWXP75nc1s/1st"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.st = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 2nd
                  nd: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/hall-of-fame/OCaAPC3wMthWXP75nc1s/2nd"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.nd = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Popular Vote
                  pop: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/hall-of-fame/OCaAPC3wMthWXP75nc1s/popularvote"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.popularVote = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Social Award
                  topFive: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/hall-of-fame/OCaAPC3wMthWXP75nc1s/social-award"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.topFive = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            } else if (this.$route.params.id == 2018) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  freshy: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/hall-of-fame/OCaAPC3wMthWXP75nc1s/rmufreshyboyandgirl"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.rmufreshyboyandgirl = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 1st
                  st: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/hall-of-fame/OCaAPC3wMthWXP75nc1s/1st"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.st = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 2nd
                  nd: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/hall-of-fame/OCaAPC3wMthWXP75nc1s/2nd"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.nd = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Popular Vote
                  pop: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/hall-of-fame/OCaAPC3wMthWXP75nc1s/popularvote"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.popularVote = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Social Award
                  topFive: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/hall-of-fame/OCaAPC3wMthWXP75nc1s/social-award"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.topFive = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            } else if (this.$route.params.id == 2019) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  freshy: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/hall-of-fame/OCaAPC3wMthWXP75nc1s/rmufreshyboyandgirl"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.rmufreshyboyandgirl = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 1st
                  st: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/hall-of-fame/OCaAPC3wMthWXP75nc1s/1st"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.st = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 2nd
                  nd: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/hall-of-fame/OCaAPC3wMthWXP75nc1s/2nd"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.nd = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Popular Vote
                  pop: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/hall-of-fame/OCaAPC3wMthWXP75nc1s/popularvote"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.popularVote = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Social Award
                  topFive: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/hall-of-fame/OCaAPC3wMthWXP75nc1s/social-award"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.topFive = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            } else if (this.$route.params.id == 2020) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  freshy: db
                    .collection(
                      "/rmufreshyboyandgirl/2020/hall-of-fame/OCaAPC3wMthWXP75nc1s/rmufreshyboyandgirl"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.rmufreshyboyandgirl = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 1st
                  st: db
                    .collection(
                      "/rmufreshyboyandgirl/2020/hall-of-fame/OCaAPC3wMthWXP75nc1s/1st"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.st = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 2nd
                  nd: db
                    .collection(
                      "/rmufreshyboyandgirl/2020/hall-of-fame/OCaAPC3wMthWXP75nc1s/2nd"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.nd = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Popular Vote
                  pop: db
                    .collection(
                      "/rmufreshyboyandgirl/2020/hall-of-fame/OCaAPC3wMthWXP75nc1s/popularvote"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.popularVote = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Social Award
                  topFive: db
                    .collection(
                      "/rmufreshyboyandgirl/2020/hall-of-fame/OCaAPC3wMthWXP75nc1s/social-award"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.topFive = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            } else if (this.$route.params.id == 2021) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  freshy: db
                    .collection(
                      "/rmufreshyboyandgirl/2021/hall-of-fame/OCaAPC3wMthWXP75nc1s/rmufreshyboyandgirl"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.rmufreshyboyandgirl = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 1st
                  st: db
                    .collection(
                      "/rmufreshyboyandgirl/2021/hall-of-fame/OCaAPC3wMthWXP75nc1s/1st"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.st = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // 2nd
                  nd: db
                    .collection(
                      "/rmufreshyboyandgirl/2021/hall-of-fame/OCaAPC3wMthWXP75nc1s/2nd"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.nd = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Popular Vote
                  pop: db
                    .collection(
                      "/rmufreshyboyandgirl/2021/hall-of-fame/OCaAPC3wMthWXP75nc1s/popularvote"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.popularVote = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),

                  // Social Award
                  topFive: db
                    .collection(
                      "/rmufreshyboyandgirl/2021/hall-of-fame/OCaAPC3wMthWXP75nc1s/social-award"
                    )
                    .get()
                    .then(
                      (querySnapShot) => {
                        let tempDataArray = [];
                        querySnapShot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                cId: doc.data().cId,
                                image: doc.data().image,
                                reward: doc.data().reward,
                                faculty: doc.data().faculty,
                                nickName: doc.data().nickName,
                                name: doc.data().name,
                                lastName: doc.data().lastName,
                              },
                            ];
                          }
                        });
                        this.topFive = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
              ];
            }
          });
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
  margin: 0 auto !important;
  padding: 0 !important;
}

$red: #ff080083;
$green: #2ebd268a;

.bar {
  background: #000000bb !important;
  color: #c29e59 !important;
}

section {
  // Winning
  .award_winning {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-right: 5px solid;
          border-bottom: 5px solid;
          border-color: #e6bb6b;
          border-radius: 20px;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: linear-gradient(0deg, #000000 0%, #ebebeb00 100%);
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #c29e59;
            width: 100%;
            .text {
              height: 300px;
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #c29e59;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #ebebeb;
      }
    }
  }

  // 1st
  .one_st {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #e6bb6b;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: #00000000;
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #c29e59;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #c29e59;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #ebebeb;
      }
    }
  }

  // 2nd
  .two_nd {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #e6bb6b;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: #000000bb;
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #c29e59;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #c29e59;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #ebebeb;
      }
    }
  }

  // Popular Vote
  .popular_vote {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #000000;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: linear-gradient(
              -45deg,
              #e11a22 10%,
              #97090d 50%,
              #ea7b20 50%,
              #f1c407 100%
            );
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #000000;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #000000;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #161515;
      }
    }
  }

  // People's Favorite
  .favorite {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #000000;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: linear-gradient(
              -45deg,
              #5f7086 0%,
              #11193c 15%,
              #435568 40%,
              #d8b21a 75%,
              #9a9da3 100%
            );
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #000000;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #000000;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #161515;
      }
    }
  }
}
</style>
