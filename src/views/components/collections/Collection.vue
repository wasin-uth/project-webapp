<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <section class="pb-15">
      <v-container>
        <v-row dense>
          <!-- Set 1 -->
          <v-col cols="6" md="3" sm="6">
            <div v-for="(item, i) in setOne" :key="i">
              <v-card class="cont text-left" elevation="5" dark>
                <v-img
                  class="img"
                  :src="item.image"
                  lazy-src="@/assets/image/lazy_srcvideos.png"
                >
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <!-- <v-icon>{{ item.icon }}</v-icon> -->
                  <strong v-text="item.descriptions" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>

          <!-- Set 2 -->
          <v-col cols="6" md="3" sm="6">
            <div v-for="(item, i) in setTwo" :key="i">
              <v-card class="cont text-left" elevation="5" dark>
                <v-img
                  class="img"
                  :src="item.image"
                  lazy-src="@/assets/image/lazy_srcvideos.png"
                >
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <strong v-text="item.descriptions" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>

          <!-- Set 3 -->
          <v-col cols="6" md="3" sm="6">
            <div v-for="(item, i) in setThree" :key="i">
              <v-card class="cont text-left" elevation="5" dark>
                <v-img
                  class="img"
                  :src="item.image"
                  lazy-src="@/assets/image/lazy_srcvideos.png"
                >
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <strong v-text="item.descriptions" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>

          <!-- Set 4 -->
          <v-col cols="6" md="3" sm="6">
            <div v-for="(item, i) in setFour" :key="i">
              <v-card class="cont text-left" elevation="5" dark>
                <v-img
                  class="img"
                  :src="item.image"
                  lazy-src="@/assets/image/lazy_srcvideos.png"
                >
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <strong v-text="item.descriptions" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>
        </v-row>
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
  data: () => ({
    setOne: [],
    setTwo: [],
    setThree: [],
    setFour: [],
  }),

  created() {
    db.collection("/rmufreshyboyandgirl/")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach(() => {
            if (this.$route.params.id == 2017) {
              tempDataArray = [
                ...tempDataArray,
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/collections/sets/set-one"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setOne = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/collections/sets/set-two"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setTwo = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/collections/sets/set-three"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setThree = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2017/collections/sets/set-four"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setFour = tempDataArray;
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
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/collections/sets/set-one"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setOne = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/collections/sets/set-two"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setTwo = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/collections/sets/set-three"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setThree = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2018/collections/sets/set-four"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setFour = tempDataArray;
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
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/collections/sets/set-one"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setOne = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/collections/sets/set-two"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setTwo = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/collections/sets/set-three"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setThree = tempDataArray;
                      },
                      (err) => {
                        console.log(err);
                      }
                    ),
                },
                {
                  setOne: db
                    .collection(
                      "/rmufreshyboyandgirl/2019/collections/sets/set-four"
                    )
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
                                descriptions: doc.data().descriptions,
                              },
                            ];
                          }
                        });
                        this.setFour = tempDataArray;
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
$main_color: #ebebeb;

* {
  color: $main_color !important;
}

// content
.cont {
  margin: 20px 5px !important;
  border-radius: 10px;
  background: #000000bb !important;
  padding: 0 10px 5px 0;
  .img {
    border-radius: 10px;
    .back {
      height: 100% !important;
      background: linear-gradient(100deg, #d1beaa13 0%, #15141244 60%);
      &:hover {
        background: linear-gradient(100deg, #d1beaa28 0%, #15141275 60%);
      }
    }
  }
  .history {
    padding: 10px;
  }
}
</style>
