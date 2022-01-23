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
        <v-row v-for="(item, i) in data" :key="i">
          <v-col cols="8" lg="4" md="4" sm="5">
            <v-card
              class="profile"
              width="100%"
              height="350"
              dark
              elevation="5"
              rounded="lg"
            >
              <v-img class="img" height="100%" :src="item.image"></v-img>
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
                  <li>FG01 - เฟรชชี่เกิร์ล มหาวิทยาลัยราชภัฏมหาสารคาม</li>
                  <li>ชื่อ : {{ item.name }} ( nickname )</li>
                  <!-- <li>อายุ : {{  }} ปี</li> -->
                  <li>น้ำหนัก : กิโลกรัม</li>
                  <li>ส่วนสูง : เซนติเมตร</li>
                  <li>คณะ : faculty</li>
                  <li>สาขา : branch</li>
                  <li>ความสามารถพิเศษ : talent</li>
                </ul>
                <v-divider class="my-2"></v-divider>
                <ul style="list-style-type: none">
                  <!-- <li>IG : freshyboy</li> -->
                  <li>Facebook :</li>
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
      cid: this.$route.params.cid,
      data: [],
      // dataLists: [],
    };
  },
  methods: {
    close() {
      this.$router.back();
    },
  },
  created() {
    db.collection("data")
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
                  cid: doc.data().cid,
                  name: doc.data().name,
                  image: doc.data().image,
                },
              ];
            }
          });
          this.data = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
    // db.collection("data/2rsDianYRHptEvolAfw5/address")
    //   .get()
    //   .then(
    //     (querySnapshot) => {
    //       let tempDataArray = [];
    //       querySnapshot.forEach((doc) => {
    //         if (doc.exists) {
    //           tempDataArray = [
    //             ...tempDataArray,
    //             {
    //               id: doc.id,
    //               email: doc.data().email,
    //               // email: doc.data().email,
    //               // profile: doc.data().profile,
    //             },
    //           ];
    //         }
    //       });
    //       this.dataLists = tempDataArray;
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
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
