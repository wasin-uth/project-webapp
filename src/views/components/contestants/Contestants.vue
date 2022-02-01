<template>
  <Layouts>
    <div>
      <Bar />
    </div>
    <section class="pb-15">
      <v-row class="pb-8">
        <!-- Freshy Boy -->
        <v-col cols="6">
          <v-container class="pa-1">
            <v-item-group v-model="selectedBoy" multiple>
              <v-row class="contents">
                <v-col
                  v-for="(item, i) in freshyBoy"
                  :key="i"
                  class="pa-2"
                  lg="4"
                  md="6"
                  sm="6"
                >
                  <v-card dark width="100%" height="300">
                    <v-item v-slot="{ active, toggle }">
                      <v-img
                        :src="item.profile"
                        lazy-src="@/assets/image/lazy_src.png"
                        height="100%"
                        class="text-left"
                      >
                        <v-card
                          class="shadow"
                          color="transparent"
                          elevation="0"
                          width="100%"
                          height="100%"
                        >
                          <v-row class="text-center">
                            <v-col>
                              <v-card
                                class="pa-1"
                                color="transparent"
                                elevation="0"
                              >
                                <v-row>
                                  <v-col>
                                    <v-icon
                                      color="red darken-2"
                                      @click="toggle"
                                    >
                                      {{
                                        active
                                          ? "mdi-heart"
                                          : "mdi-heart-outline"
                                      }}
                                    </v-icon>
                                  </v-col>
                                  <v-col>
                                    <p style="color: black">
                                      {{ active ? item.no + 1 : item.no - 0 }}
                                    </p>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col class="text-right pa-1">
                              <v-btn
                                icon
                                small
                                :to="`/contestants/${item.year}/details-${item.cId}=${item.Id}`"
                              >
                                <v-icon color="black"> mdi-magnify </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <div class="title">
                                <p>
                                  <span
                                    style="
                                      font-size: 34px;
                                      font-weight: 900 !important;
                                      color: #c29e59;
                                    "
                                    >{{ item.cId }}</span
                                  >
                                  <span> N'{{ item.nickName }} </span>
                                </p>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-img>
                    </v-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-item-group>
          </v-container>
        </v-col>

        <!-- Freshy Girl -->
        <v-col cols="6">
          <v-container class="pa-1">
            <v-item-group v-model="selectedGirl" multiple>
              <v-row class="contents">
                <v-col
                  v-for="(item, i) in freshyGirl"
                  :key="i"
                  class="pa-2"
                  lg="4"
                  md="6"
                  sm="6"
                >
                  <v-card dark width="100%" height="300">
                    <v-item v-slot="{ active, toggle }">
                      <v-img
                        :src="item.profile"
                        lazy-src="@/assets/image/lazy_src.png"
                        height="100%"
                        class="text-left"
                      >
                        <v-card
                          class="shadow"
                          color="transparent"
                          elevation="0"
                          width="100%"
                          height="100%"
                        >
                          <v-row class="text-center">
                            <v-col>
                              <v-card
                                class="pa-1"
                                color="transparent"
                                elevation="0"
                              >
                                <v-row>
                                  <v-col>
                                    <v-icon
                                      color="red darken-2"
                                      @click="toggle"
                                    >
                                      {{
                                        active
                                          ? "mdi-heart"
                                          : "mdi-heart-outline"
                                      }}
                                    </v-icon>
                                  </v-col>
                                  <v-col>
                                    <p style="color: black">
                                      {{ active ? item.no + 1 : item.no - 0 }}
                                    </p>
                                  </v-col>
                                </v-row>
                              </v-card>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col class="text-right pa-1">
                              <v-btn
                                icon
                                small
                                :to="`/contestants/${item.year}/details-${item.cId}=${item.Id}`"
                              >
                                <v-icon color="black"> mdi-magnify </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <div class="title">
                                <p>
                                  <span
                                    style="
                                      font-size: 34px;
                                      font-weight: 900 !important;
                                      color: #c29e59;
                                    "
                                    >{{ item.cId }}</span
                                  >
                                  <span> N'{{ item.nickName }} </span>
                                </p>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-img>
                    </v-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-item-group>
          </v-container>
        </v-col>
      </v-row>
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
  data: () => ({
    dialog: false,
    selectedBoy: [],
    selectedGirl: [],

    freshyBoy: [],
    freshyGirl: [],
  }),
  methods: {},
  created() {
    // getData

    db.collection("/rmufreshyboyandgirl/")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (this.$route.params.id == 2017) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  fb: db
                    .collection("/rmufreshyboyandgirl/2017/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2017,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
                {
                  fg: db
                    .collection("/rmufreshyboyandgirl/2017/freshygirl")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2017,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
            } else if (this.$route.params.id == 2018) {
              tempDataArray = [
                ...tempDataArray,
                {
                  fb: db
                    .collection("/rmufreshyboyandgirl/2018/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2018,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
                {
                  fg: db
                    .collection("/rmufreshyboyandgirl/2018/freshygirl")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2018,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
            } else if (this.$route.params.id == 2019) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.id,
                  fb: db
                    .collection("/rmufreshyboyandgirl/2019/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2019,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
                {
                  id: doc.id,
                  fg: db
                    .collection("/rmufreshyboyandgirl/2019/freshygirl")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2019,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
            } else if (this.$route.params.id == 2020) {
              tempDataArray = [
                ...tempDataArray,
                {
                  fb: db
                    .collection("/rmufreshyboyandgirl/2020/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2020,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
                {
                  fg: db
                    .collection("/rmufreshyboyandgirl/2020/freshygirl")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2020,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
            } else if (this.$route.params.id == 2021) {
              tempDataArray = [
                ...tempDataArray,
                {
                  fb: db
                    .collection("/rmufreshyboyandgirl/2021/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2021,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
                {
                  fg: db
                    .collection("/rmufreshyboyandgirl/2021/freshygirl")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (doc.exists) {
                            tempDataArray = [
                              ...tempDataArray,
                              {
                                year: 2021,
                                Id: doc.id,
                                no: parseInt(doc.data().no),
                                profile: doc.data().profile,
                                cId: doc.data().cId,
                                nickName: doc.data().nickName,
                                faculty: doc.data().faculty,
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
          this.Freshy = tempDataArray;
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
  text-transform: uppercase !important;
}

.title {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

section {
  .shadow {
    background-image: linear-gradient(0deg, #000000c2 20%, #00000000 80%);
    width: 100%;
    height: 100%;
    &:hover {
      background-image: linear-gradient(0deg, #00000070 20%, #00000000 80%);
    }
  }
}
</style>
