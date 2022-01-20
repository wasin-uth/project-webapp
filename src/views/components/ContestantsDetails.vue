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
        <v-row>
          <v-col cols="8" lg="4" md="4" sm="5">
            <v-card
              class="profile"
              width="100%"
              height="350"
              dark
              elevation="5"
              rounded="lg"
            >
              <v-img
                class="img"
                height="100%"
                src="https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/36371669_1652289811486479_7982858445227294720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEzHtLUdTm9dht5OV83f_mAruN_nohgGCmu43-eiGAYKbkY2WSGbNV28-uLEMIMMr39rGdpJZshKqKKzp23-54H&_nc_ohc=7pA987nWTzsAX88seV9&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9FI0W9MrFhghdnCBlhNMgZ0b6-zIHROOi2420KirJn3Q&oe=620A6985"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" lg="8" md="8" sm="7">
            <v-card
              class="contents pa-2"
              width="100%"
              height="100%"
              dark
              color="gold"
              elevation="10"
              rounded="lg"
            >
              <v-system-bar class="pa-1" dark color="transparent">
                <h1>FG01</h1>
                <v-spacer></v-spacer>
                <v-btn icon x-small elevation="0" @click="close">
                  <v-icon size="30" color="#ffffffbb">mdi-close-circle</v-icon>
                </v-btn>
              </v-system-bar>
              <v-card-text class="text_contents px-5 py-1">
                <ul style="list-style-type: none">
                  <li>
                    FG01 - เฟรชชี่เกิร์ล
                    มหาวิทยาลัยราชภัฏมหาสารคาม
                  </li>
                  <li>ชื่อ : name  ( nickname )</li>
                  <!-- <li>อายุ : {{  }} ปี</li> -->
                  <li>น้ำหนัก :  กิโลกรัม</li>
                  <li>ส่วนสูง :  เซนติเมตร</li>
                  <li>คณะ : faculty</li>
                  <li>สาขา : branch</li>
                  <li>ความสามารถพิเศษ : talent</li>
                </ul>
                <v-divider class="my-2"></v-divider>
                <ul style="list-style-type: none">
                  <!-- <li>IG : freshyboy</li> -->
                  <li>Facebook : Freshy boy</li>
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
import Footer from "../../components/footer/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      cid: this.$route.params.cid,
    };
  },
  methods: {
    close() {
      this.$router.back();
    },
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
      transform: scale(1.2);
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
    }
  }
}
</style>
