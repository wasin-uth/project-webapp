<template>
  <Layouts>
    <div>
      <Bar />
    </div>
    <section class="pb-15">
      <v-row>
        <v-col class="pa-2" cols="6">
          <v-container>
            <v-row>
              <v-col
                class="pa-2"
                lg="4"
                md="6"
                sm="6"
                v-for="(item, i) in freshyBoy"
                :key="i.Id"
              >
                <v-card class="contestants" dark max-width="200" rounded="lg">
                  <v-img
                    :src="item.profile"
                    lazy-src="@/assets/image/lazy_src.png"
                    height="400"
                  >
                    <div class="shadow"></div>
                    <v-card class="profile" dark rounded="0" color="#000000ee">
                      <!-- Text -->
                      <v-card-subtitle class="pa-2">
                        <h3>
                          <b style="text-transform: uppercase">{{
                            item.cId
                          }}</b>
                          : น้อง {{ item.nickName }}
                          <br />
                          คณะ {{ item.faculty }}
                        </h3>
                      </v-card-subtitle>

                      <!-- Actions -->
                      <v-card-actions class="actions">
                        <v-row>
                          <v-col class="pa-1" cols="6">
                            <v-btn plain block small>
                              <v-icon>mdi-heart-outline</v-icon>
                              <p>20</p>
                            </v-btn>
                          </v-col>
                          <v-col class="pa-1" cols="6">
                            <v-btn
                              plain
                              block
                              small
                              :to="`/contestants/${id}/details-${item.cId}=${item.Id}`"
                            >
                              <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <!-- Freshy Girl -->
        <v-col class="pa-2" cols="6">
          <v-container>
            <v-row>
              <v-col
                class="pa-2"
                lg="4"
                md="6"
                sm="6"
                v-for="(item, i) in freshyGirl"
                :key="i"
              >
                <v-card class="contestants" dark max-width="200" rounded="lg">
                  <v-img
                    :src="item.profile"
                    lazy-src="@/assets/image/lazy_src.png"
                    height="400"
                  >
                    <div class="shadow"></div>
                    <v-card class="profile" dark rounded="0" color="#000000ee">
                      <!-- Text -->
                      <v-card-subtitle class="pa-2">
                        <h3>
                          <b style="text-transform: uppercase">{{
                            item.cId
                          }}</b>
                          : น้อง {{ item.nickName }}
                          <br />
                          คณะ {{ item.faculty }}
                        </h3>
                      </v-card-subtitle>

                      <!-- Actions -->
                      <v-card-actions class="actions">
                        <v-row>
                          <v-col class="pa-1" cols="6">
                            <v-btn plain block small>
                              <v-icon>mdi-heart-outline</v-icon>
                              <p>20</p>
                            </v-btn>
                          </v-col>
                          <v-col class="pa-1" cols="6">
                            <v-btn
                              plain
                              block
                              small
                              :to="`/contestants/${id}/details-${item.cId}=${item.Id}`"
                            >
                              <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
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
  data() {
    return {
      dialog: false,
      id: this.$route.params.id,
      freshyBoy: [],
      freshyGirl: [],
    };
  },
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
                  FB: db
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
                                Id: doc.id,
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
                  FG: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  name: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  FG: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  name: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  FG: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  name: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  FG: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  name: db
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
                                Id: doc.id,
                                no: doc.data().no,
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
                  FG: db
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
                                Id: doc.id,
                                no: doc.data().no,
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

section {
  .contestants {
    position: relative;
    overflow: hidden;
    .shadow {
      background-image: linear-gradient(0deg, #000000c0 35%, #00000000 70%);
      width: 100%;
      height: 100%;
    }
    .profile {
      position: absolute;
      bottom: 0;
      width: 100%;
      backdrop-filter: blur(10px) !important;
      h3 {
        line-height: 1.5;
      }
    }
  }
}
</style>
