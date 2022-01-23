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
                v-for="(item, i) in dataLists"
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
                          ชื่ออ
                          <br />
                          คณะ วิทยาศาสตร์และเทคโนโลยี
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
                          <b>{{ item.cid }} :</b>
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
      database: [
        {
          cid: "FB08",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/36367576_1652287424820051_5619321569823162368_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHIDEk46bLp93CcGnZxaH2Sc-rTp2xFcXtz6tOnbEVxe2yFmUHnnHKd_eCTUmIrDSeh_2OmMnKFltyMT8J4VMiM&_nc_ohc=kCb2cZSuaYkAX_tdHvP&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9ESy_eAAj3CnSsDrpjzH5roglgbBKX6XY9B6zbKFeiXw&oe=620D0FA8",
        },
        {
          cid: "FG08",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/36371669_1652289811486479_7982858445227294720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEzHtLUdTm9dht5OV83f_mAruN_nohgGCmu43-eiGAYKbkY2WSGbNV28-uLEMIMMr39rGdpJZshKqKKzp23-54H&_nc_ohc=7pA987nWTzsAX88seV9&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9FI0W9MrFhghdnCBlhNMgZ0b6-zIHROOi2420KirJn3Q&oe=620A6985",
        },
        {
          cid: "FB08",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/36367576_1652287424820051_5619321569823162368_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHIDEk46bLp93CcGnZxaH2Sc-rTp2xFcXtz6tOnbEVxe2yFmUHnnHKd_eCTUmIrDSeh_2OmMnKFltyMT8J4VMiM&_nc_ohc=kCb2cZSuaYkAX_tdHvP&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9ESy_eAAj3CnSsDrpjzH5roglgbBKX6XY9B6zbKFeiXw&oe=620D0FA8",
        },
      ],
      dataLists: [],
    };
  },
  created() {
    // const data = [
    //   {
    //     id: "01",
    //     cid: "FB-01",
    //     type: "เฟรชชี่บอย",
    //     name: "นายเอ เฟรชชี่",
    //     nickName: "เอ",
    //     age: 18,
    //     weight: 65,
    //     height: 172,
    //     faculty: "วิทยาศาสตร์และเทคโนโลยี",
    //     branch: "วิทยาการคอมพิวเตอร์",
    //     profile:
    //       "https://i.pinimg.com/564x/b4/d7/dc/b4d7dc7fcee41375e778683ed2f67f8f.jpg",
    //   },
    // ];
    // const contestantsRef = db.collection("");
    // data.forEach((contestants) => {
    //   contestantsRef.doc(contestants.id).set({
    //     id: contestants.id, // รหัส document
    //     cId: contestants.cId, // รหัส ผู้เข้าประกวด
    //     type: contestants.type, // ประเภท เฟรชชี่ ชาย หรือ เฟรชชี่ หญิง
    //     name: contestants.name, // ชื่อ
    //     lastName: contestants.lastName, // นามสกุล
    //     nickName: contestants.nickName, //
    //     age: contestants.age, //
    //     weight: contestants.weight, //
    //     height: contestants.height, //
    //     faculty: contestants.faculty, // คณะ
    //     branch: contestants.branch, // สาขา
    //     profile: contestants.profile, //
    //   });
    // });

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
                },
              ];
            }
          });
          this.dataLists = tempDataArray;
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
