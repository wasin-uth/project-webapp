<template>
  <div>
    <section class="pb-15" style="overflow: hidden">
      <v-row>
        <v-layout align-center justify-center style="height: 100%">
          <v-sheet
            color="transparent"
            width="90%"
            height="80%"
            class="ma-10 my-15"
            light
          >
            <v-row>
              <v-col cols="12">
                <v-card class="text-center ma-2" rounded="lg" dark>
                  <v-carousel
                    cycle
                    height="300"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                      <v-sheet height="100%">
                        <v-img :src="slide.path"></v-img>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
                <v-card
                  class="descBar text-center ma-2 py-4"
                  rounded="lg"
                >
                  <h1>
                    คะแนนโหวต Freshy Boy and Girl ด้วยทรูมันนี่วอลเลต
                    จากวันที่เปิดโหวตจนถึงวันนี้
                  </h1>
                </v-card>
              </v-col>

              <!-- Freshy Boy -->
              <v-col cols="6">
                <v-container rounded="lg">
                  <v-row>
                    <v-col
                      v-for="(item, i) in freshyboy"
                      :key="i"
                      cols="12"
                      lg="4"
                      md="6"
                    >
                      <v-card>
                        <v-img :src="item.profile" height="250">
                          <div class="shadow"></div>
                          <v-card-actions class="actions pa-0">
                            <v-card
                              class="cid ma-0"
                              height="45"
                              width="60"
                              elevation="0"
                              rounded="0 tr-pill"
                            >
                              <v-col>
                                <h4>
                                  {{ item.cId }}
                                </h4>
                              </v-col>
                            </v-card>
                            <h1 class="px-2">{{ item.popularScore }} แต้ม</h1>
                          </v-card-actions>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <!-- Freshy Girl -->
              <v-col cols="6">
                <v-container rounded="lg">
                  <v-row>
                    <v-col
                      v-for="(item, i) in freshygirl"
                      :key="i"
                      cols="12"
                      lg="4"
                      md="6"
                    >
                      <v-card>
                        <v-img :src="item.profile" height="250">
                          <div class="shadow"></div>
                          <v-card-actions class="actions pa-0">
                            <v-card
                              class="cid ma-0"
                              height="45"
                              width="60"
                              elevation="0"
                              rounded="0 tr-pill"
                            >
                              <v-col>
                                <h4>
                                  {{ item.cId }}
                                </h4>
                              </v-col>
                            </v-card>
                            <h1 class="px-2">{{ item.popularScore }} แต้ม</h1>
                          </v-card-actions>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-sheet>
        </v-layout>
      </v-row>
    </section>
  </div>
</template>

<script>
import { db } from "@/database/firebase.js";

export default {
  data() {
    return {
      freshyboy: [],
      freshygirl: [],

      slides: [
        {
          path: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/274078079_276662204600115_115538742855526597_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHLztpdmU8JeBnK0d6vfk-OR_wuO71KpLpH_C47vUqkuvoPA1whKhlJgYT1xCsUir4MfC12Yif4SupsXMDyvUHb&_nc_ohc=fNlZacbO0jEAX_4PkSH&_nc_ht=scontent.fbkk14-1.fna&oh=03_AVJHnugBrOI3xQK41v2J-tIz_HpnEQLEtvffnB-_frl3_Q&oe=6235F0DA",
        },
        {
          path: "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/259304025_979149053009009_1133406628604099339_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEDU2BEHqlORzdHa5IcZUrslbDIeffDKP6VsMh598Mo_swN3rgqsqivmVToImVG1WNypyjcjEQG5oaTOAHYXP2m&_nc_ohc=lKbwYcmcTnAAX9KtWpT&_nc_ht=scontent.fbkk10-1.fna&oh=03_AVL9Y6P2tHZbBmFJS1rS9YtU5WmCPqLOlkdej9L_Yb9vlg&oe=6237C221",
        },
        {
          path: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/273740051_977068759860153_47833332886977688_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeG_kEuPICLYsIIOxOFVkUcIDfIDVxv0Eg4N8gNXG_QSDuwDQY2JXmRqSJ_wvOQL-ami-Yy22vRispKImIqyLbFz&_nc_ohc=DyzxMPZTpc0AX-Sa6uG&_nc_ht=scontent.fbkk14-1.fna&oh=03_AVKfCmx7tFuBBoOKiohS7m18A_x6q0hZhe34-9vjqqRExA&oe=623711AB",
        },
      ],
    };
  },
  created() {
    // Freshy Boy
    db.collection("/rmufreshyboyandgirl/2019/image-vote-fb")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: parseInt(doc.data().no),
                  cId: doc.data().cId,
                  profile: doc.data().image,
                  faculty: doc.data().faculty,
                  popularScore: doc.data().popularScore,
                },
              ];
            }
          });
          this.freshyboy = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );

    // Freshy Girl
    db.collection("/rmufreshyboyandgirl/2019/image-vote-fg")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: parseInt(doc.data().no),
                  cId: doc.data().cId,
                  profile: doc.data().image,
                  faculty: doc.data().faculty,
                  popularScore: doc.data().popularScore,
                },
              ];
            }
          });
          this.freshygirl = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>

<style lang="scss" scoped>

.descBar {
  background-image: linear-gradient(20deg, #ffffff 40%, #FFE95D 100%);
}

.actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(0deg, #ffffffbe 10%, #ffffff00 100%);
  .cid {
    text-transform: uppercase;
    background-image: linear-gradient(0deg, #c29d59 50%, #f5deb4 100%);
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #c29d59 !important;
    line-height: 1;
    text-shadow: 1px 1px 0px #000000;
  }
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #c29d593a 40%, #ffffff00 100%);
}
</style>
