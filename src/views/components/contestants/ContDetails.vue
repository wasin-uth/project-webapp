<template>
  <div>
    <section>
      <v-sheet
        class="sheet pa-4"
        width="65%"
        rounded="lg"
        dark
        color="transparent"
      >
        <!-- Freshy Boy -->
        <v-row v-for="(item, i) in freshyBoy" :key="i.id">
          <!-- Profile -->
          <v-col cols="8" lg="4" md="4" sm="5">
            <v-card
              class="profile"
              width="70%"
              height="350"
              dark
              elevation="5"
              rounded="lg"
            >
              <v-img
                class="img"
                height="100%"
                :src="item.profile"
                lazy-src="@/assets/image/lazy_src.png"
                :alt="item.cId"
              ></v-img>
            </v-card>
          </v-col>
          <!-- Content -->
          <v-col cols="12" lg="8" md="8" sm="7">
            <v-card
              class="contents pa-2"
              width="100%"
              height="100%"
              dark
              color="black"
              elevation="10"
              rounded="lg"
            >
              <v-system-bar class="pa-1" dark color="transparent">
                <v-spacer></v-spacer>
                <v-btn icon x-small elevation="0" @click="close">
                  <v-icon size="30" color="#ffffffbb">mdi-close-circle</v-icon>
                </v-btn>
              </v-system-bar>
              <v-card-text class="text_contents px-5 py-1">
                <ul style="list-style-type: none">
                  <li>
                    <b style="text-transform: uppercase">{{ item.cId }}</b> -
                    เฟรชชี่บอย มหาวิทยาลัยราชภัฏมหาสารคาม {{ id }}
                  </li>
                  <li>
                    ชื่อ : {{ item.name }} {{ item.lastName }} (
                    {{ item.nickName }} )
                  </li>
                  <!-- <li>อายุ : {{  }} ปี</li> -->
                  <li>คณะ : {{ item.faculty }}</li>
                  <li>ส่วนสูง : {{ item.height }}</li>
                  <li>น้ำหนัก : {{ item.weight }}</li>
                  <li>ความสามารถ : ร้องเพลง</li>
                  <li>สโลแกน : ชีวิตไม่มีอะไรมาก แค่อย่าทำให้มันยากก็พอ</li>
                </ul>
                <v-divider class="my-2"></v-divider>
                <ul style="list-style-type: none">
                  <li>Facebook : profile={{ item.cId }}-{{ item.nickName }}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Freshy Girl -->
        <v-row v-for="(item, i) in freshyGirl" :key="i.id">
          <!-- Profile -->
          <v-col cols="8" lg="4" md="4" sm="5">
            <v-card
              class="profile"
              width="70%"
              height="350"
              dark
              elevation="5"
              rounded="lg"
            >
              <v-img
                class="img"
                height="100%"
                :src="item.profile"
                lazy-src="@/assets/image/lazy_src.png"
                :alt="item.cId"
              ></v-img>
            </v-card>
          </v-col>
          <!-- Content -->
          <v-col cols="12" lg="8" md="8" sm="7">
            <v-card
              class="contents pa-2"
              width="100%"
              height="100%"
              dark
              color="black"
              elevation="10"
              rounded="lg"
            >
              <v-system-bar class="pa-1" dark color="transparent">
                <v-spacer></v-spacer>
                <v-btn icon x-small elevation="0" @click="close">
                  <v-icon size="30" color="#ffffffbb">mdi-close-circle</v-icon>
                </v-btn>
              </v-system-bar>
              <v-card-text class="text_contents px-5 py-1">
                <ul style="list-style-type: none">
                  <li>
                    <b style="text-transform: uppercase">{{ item.cId }}</b> -
                    เฟรชชี่เกิร์ล มหาวิทยาลัยราชภัฏมหาสารคาม {{ id }}
                  </li>
                  <li>
                    ชื่อ : {{ item.name }} {{ item.lastName }} (
                    {{ item.nickName }} )
                  </li>
                  <!-- <li>อายุ : {{  }} ปี</li> -->
                  <li>คณะ : {{ item.faculty }}</li>
                  <li>ส่วนสูง : {{ item.height }}</li>
                  <li>น้ำหนัก : {{ item.weight }}</li>
                  <li>ความสามารถ : ร้องเพลง</li>
                  <li>สโลแกน : ชีวิตไม่มีอะไรมาก แค่อย่าทำให้มันยากก็พอ</li>
                </ul>
                <v-divider class="my-2"></v-divider>
                <ul style="list-style-type: none">
                  <li>Facebook : profile={{ item.cId }}-{{ item.nickName }}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
import { db } from "@/database/firebase.js";

export default {
  name: "Home",
  components: {
    Footer,
  },

  data() {
    return {
      id: this.$route.params.id,

      freshyBoy: [],
      freshyGirl: [],
    };
  },

  methods: {
    close() {
      this.$router.back();
    },
  },

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
                  fb: db
                    .collection("/rmufreshyboyandgirl/2017/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                  fb: db
                    .collection("/rmufreshyboyandgirl/2019/freshyboy")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                    .collection("/rmufreshyboyandgirl/2019/freshygirl")
                    .get()
                    .then(
                      (querySnapshot) => {
                        let tempDataArray = [];
                        querySnapshot.forEach((doc) => {
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
                          if (this.$route.params.Id == doc.id) {
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
                                faculty: doc.data().faculty,
                                height: doc.data().height,
                                weight: doc.data().weight,
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  .sheet {
    .profile {
      transform: scale(1.5);
    }
    .contents {
      .text_contents {
        font-size: 18px;
        line-height: 1.6;
      }
    }
  }
}

@media only screen and(max-width: 960px) {
  section {
    .sheet {
      width: 90% !important;
    }
  }
}
@media only screen and(max-width: 600px) {
  section {
    .sheet {
      width: 95% !important;
      .profile {
        transform: scale(1.2) !important;
      }
    }
  }
}
</style>
