<template>
  <Layouts>
    <v-app-bar dark color="#000000bb" rounded="b-lg" height="80">
      <v-row>
        <!-- Freshy Boy -->
        <v-col class="text-center">
          <h1>{{ this.$route.name }} {{ id }}</h1>
        </v-col>
      </v-row>
    </v-app-bar>
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
                v-for="(item, i) in 9"
                :key="i"
              >
                <v-card class="contestants" dark max-width="200" rounded="lg">
                  <v-img
                    :src="item.img"
                    lazy-src="@/assets/image/lazy_src.png"
                    height="400"
                  >
                    <v-card class="profile" dark rounded="0">
                      <v-card-subtitle class="pa-2">
                        <h3>
                          <b>{{ item.cid }}</b> คณะ วิทยาศาสตร์และเทคโนโลยี
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
                    <v-card class="profile" dark rounded="0">
                      <v-card-subtitle class="pa-2">
                        <h3>
                          <b>{{ item.cid }}</b> คณะ วิทยาศาสตร์และเทคโนโลยี
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
      </v-row>
    </section>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";

export default {
  name: "Home",
  components: {
    Layouts,
  },
  data() {
    return {
      id: this.$route.params.id,
      database: [
        {
          cid: "FB08",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/36371669_1652289811486479_7982858445227294720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEzHtLUdTm9dht5OV83f_mAruN_nohgGCmu43-eiGAYKbkY2WSGbNV28-uLEMIMMr39rGdpJZshKqKKzp23-54H&_nc_ohc=7pA987nWTzsAX88seV9&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9FI0W9MrFhghdnCBlhNMgZ0b6-zIHROOi2420KirJn3Q&oe=620A6985",
        },
        {
          cid: "FG08",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/36371669_1652289811486479_7982858445227294720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEzHtLUdTm9dht5OV83f_mAruN_nohgGCmu43-eiGAYKbkY2WSGbNV28-uLEMIMMr39rGdpJZshKqKKzp23-54H&_nc_ohc=7pA987nWTzsAX88seV9&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9FI0W9MrFhghdnCBlhNMgZ0b6-zIHROOi2420KirJn3Q&oe=620A6985",
        },
      ],
    };
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
    .profile {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      background: #000000d2;
      backdrop-filter: blur(10px);
      h3 {
        line-height: 1.5;
      }
    }
  }
}
</style>
