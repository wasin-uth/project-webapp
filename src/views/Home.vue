<template>
  <Layouts>
    <section>
      <div
        v-for="card in cards"
        :key="card.id"
        :style="{ display: active_card.id != card.id ? 'none' : '' }"
      >
        <v-row>
          <v-col cols="3" class="contestants">
            <div class="slide_show">
              <v-card class="ctts_show" dark rounded="0">
                <v-img class="ctts_profile" :src="card.img" :alt="card.title">
                  <div class="shadow"></div>
                </v-img>
              </v-card>
              <div class="title_name">
                <p>{{ card.title }} N' นาย</p>
              </div>
            </div>
          </v-col>
          <v-col cols="3" class="contestants">
            <div class="slide_show">
              <v-card class="ctts_show" dark rounded="0">
                <v-img class="ctts_profile" :src="card.img1" :alt="card.title2">
                  <div class="shadow"></div>
                </v-img>
              </v-card>
              <div class="title_name">
                <p>{{ card.title2 }} N' ฟ้า</p>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <section class="logo">
              <v-img contain src="@/assets/logo/logo_freshy.png"></v-img>
            </section>
          </v-col>
        </v-row>
      </div>
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
      // Card Slide
      auto_animate: true,
      active_slide: 1,
      // Content Data
      cards: [
        {
          id: 1,
          title: "FB01",
          title2: "FG01",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37702464_1685892668126193_7102957274208927744_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHijBPK-2W6R5D6vA_gLFPxwtm8C4A75jLC2bwLgDvmMmgH-H_-O2xoMuMV8g3PayRe11dWrQUZYJnEQp8yYcH3&_nc_ohc=1HzgoD_GwLoAX8xTnPt&_nc_ht=scontent.fnak1-1.fna&oh=00_AT-0YwAk0aijPF0_srWSuMWei2tgEh1PyJFYd1rbydctRA&oe=6208244C",
          img1: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37627994_1685892651459528_7009516996509302784_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGHUaNxYiZdto8ur7HkdQWeX7TKoM6nwH1ftMqgzqfAfWoxgvkuBlTSIz1tFQj-3xzLXB-M49ryIoItev-hoD1t&_nc_ohc=MZvfYSiyd8cAX_FSoC0&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9saMKGrXiQMLms2Ukr-ntZPIctNSl07DyLL6TqZZyWfA&oe=62078BB9",
        },
        {
          id: 2,
          title: "FB02",
          title2: "FG02",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37603535_1685893301459463_2676145013481537536_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGQZSw6ivkWAehPzcGej6cS9XcAncIap8b1dwCdwhqnxmdVB3OGzHOeKP9Ma8JQ-jLhLoKPcDEactXBDCyiRA_h&_nc_ohc=9TdJdPljvXIAX-PNx2i&_nc_ht=scontent.fnak1-1.fna&oh=00_AT8uVKsXorU503uI1EWZ_rx4SNikj4uzVC7GWMfSQEERtA&oe=62090D1B",
          img1: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37674314_1685893088126151_8534791949268287488_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHgvksh8bnNCUiDlM3YiJqsf4wrQ-mKu2p_jCtD6Yq7anmlECkttkvHZAprAlZzS_o5ZScLFECFBOFmFfon19BF&_nc_ohc=MVBjUm1Qg_oAX8cGteT&tn=-A_ALGEeSrU-pjA7&_nc_ht=scontent.fnak1-1.fna&oh=00_AT8IgJ1pJwo1BPAPkZw75RfxnUZ1JD8ckBuMEdjtAofeYQ&oe=6207DA75",
        },
        {
          id: 3,
          title: "FB03",
          title2: "FG03",
          img: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37728687_1685893428126117_1229057466445070336_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHjmVzRRK3ukIyIJWVsafwUu9iVpslsvzG72JWmyWy_MVhhGr11C_GeVjN8Hh3Azlo_-HyASwyIPWvhk-ybuJsw&_nc_ohc=wcQ9mPBrWbgAX_oGETy&_nc_ht=scontent.fnak1-1.fna&oh=00_AT_iS_C7RjTuisHyL_rewy7qQSkwpxK__WqJ6xZzbK7Djg&oe=6209CB45",
          img1: "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37626279_1685893064792820_4103731003812478976_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeFfYXp1kpU6pJ1Fl66utkeSPdiIBkz6VCc92IgGTPpUJ6G0xRyO0o2Q0tndHeM47c0lWVlj_M3dQg1VZeK_GLj1&_nc_ohc=5Kls0EXax2wAX-kWDmO&_nc_ht=scontent.fnak1-1.fna&oh=00_AT88r-HU7G0ST4n1-Kj_XeDdxLvIDgan0aZd3dVj5Xp08Q&oe=62083014",
        },
      ],
      id: this.$route.params.id,
      year: 2021,
    };
  },
  created() {
    // Card Slide
    if (this.auto_animate) {
      this.interval = setInterval(() => {
        this.active_slide =
          this.active_slide == this.cards.length
            ? 1
            : (this.active_slide + 1) % (this.cards.length + 1);
      }, 4000);
    }
  },
  methods: {
    // Card Slide
    activate(id) {
      this.active_slide = id;
    },
  },
  computed: {
    // Card Slide
    active_card: function () {
      return this.cards.filter((card) => card.id == this.active_slide)[0];
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}

// Size card, Size image
$gold: #1d1c1c;
$background: #f3f3f3;
$shadow: #07070717;
$shadow_light: #fffafa28;
$width: 400px;
$height: 100vh;

section {
  height: $height;
  position: relative;
  overflow: hidden;
  padding: 0 5px !important;
  // background: #f3f3f3 !important;
  .contestants {
    padding: 0 5px !important;
    .slide_show {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .ctts_show {
        width: $width;
        height: $height;
        overflow: hidden;
        border-color: $background !important;
        .ctts_profile {
          width: $width;
          height: $height;
          // .shadow {
          //   width: 100%;
          //   height: 100%;
          //   background: linear-gradient(
          //     0deg,
          //     #ac835381 0%,
          //     #ac835338 25%,
          //     #ac835338 50%,
          //     #ac835338 75%,
          //     #ac835381 100%
          //   );
          //   background: -webkit-linear-gradient(
          //     90deg,
          //     #ac835381 0%,
          //     #ac835338 25%,
          //     #ac835338 50%,
          //     #ac835338 75%,
          //     #ac835381 100%
          //   );
          //   backdrop-filter: blur(0.4px);
          // }
        }
      }
    }
    .title_name {
      position: absolute;
      // bottom: 0px;
      // left: 10px;
      // z-index: 99;
      // contain: content;
      // font-size: 20px;
      // color: $gold !important;
    }
  }
  // .contestants:nth-child(2) {
  // .slide_show .ctts_show {
  //   border-bottom: 15px solid;
  // }
  // }

  .logo {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
