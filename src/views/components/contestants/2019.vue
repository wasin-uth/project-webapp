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
                cols="12"
                lg="4"
                md="6"
                sm="6"
                v-for="(item, i) in freshyBoy"
                :key="i"
              >
                <v-card class="contestants" dark max-width="200" rounded="lg">
                  <v-img
                    :src="item.img"
                    lazy-src="@/assets/image/lazy_src.png"
                    height="400"
                  >
                    <div class="shadow"></div>
                    <v-card class="profile" dark rounded="0" color="#000000ee">
                      <v-card-subtitle class="pa-2">
                        <h3>
                          <b>{{ item.cId }} :</b>
                          {{ item.name }}
                          <br />
                          คณะ {{ item.faculty }}
                        </h3>
                      </v-card-subtitle>

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
                              :to="`/contestants/${id}/details-${item.cid}`"
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
                v-for="(item, i) in 9"
                :key="i"
              >
                <v-card class="contestants" dark max-width="200" rounded="lg">
                  <v-img
                    :src="item.img"
                    lazy-src="@/assets/image/lazy_src.png"
                    height="400"
                  >
                    <div class="shadow"></div>
                    <v-card class="profile" dark rounded="0" color="#000000ee">
                      <!-- Text -->
                      <v-card-subtitle class="pa-2">
                        <h3>
                          <b>{{ item.cId }} :</b>
                          ชื่ออ
                          <br />
                          คณะ วิทยาศาสตร์และเทคโนโลยี
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
                              :to="`/contestants/${id}/details-${item.cid}`"
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
      id: 2019,
      freshyBoy: [],
      freshyGirl: [],
    };
  },
  created() {
    // getData form collection FreshyBoy
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
      );

    // getData form collection FreshyGirl
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
