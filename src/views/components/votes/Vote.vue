<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <!-- Contents -->
    <section class="pa-8 pb-15">
      <v-row class="pb-8">
        <v-col
          class="card pa-5"
          cols="12"
          lg="4"
          md="4"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card
            class="child_card"
            width="300"
            color="transparent"
            dark
            elevation="0"
            rounded="lg"
          >
            <div class="ball"></div>
            <div class="ball"></div>
            <v-card
              class="contents pa-5 text-center"
              width="100%"
              height="100%"
            >
              <v-avatar tile size="150">
                <v-img :src="item.logo" contain></v-img>
              </v-avatar>
              <div class="py-2">
                <v-card-title>
                  <h3>{{ item.title }}</h3>
                </v-card-title>
                <v-card-subtitle>
                  {{ item.subtitle }}
                </v-card-subtitle>
              </div>
              <v-card-actions>
                <v-btn class="btn" :to="item.route" block dark color="#000000">
                  <b>Let's go</b>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";
import Bar from "@/components/navigation/BarContents.vue";

export default {
  name: "Home",
  components: {
    Layouts,
    Bar,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Popular Vote",
          subtitle: "โหวตผ่าน แอพ TrueMoney Wallet",
          route: "/vote/popular-vote",
          logo: "https://www.paysolutions.asia/assets/images/home/Image-true@2x.png",
        },
        {
          id: 2,
          title: "Vote by Students",
          subtitle: "สำหรับ นักศึกษา มหาวิทยาลัยราชภัฏมหาสารคาม",
          route: "/vote/login-for-students",
          logo: "https://cdn-icons-png.flaticon.com/512/5389/5389993.png",
        },
        {
          id: 3,
          title: "Vote by Directors",
          subtitle: "สำหรับ คณะกรรมการ",
          route: "/vote/login-for-directors",
          logo: "https://cdn-icons-png.flaticon.com/512/5390/5390133.png",
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  overflow: hidden;
  .card {
    .child_card {
      overflow: hidden;
      .contents {
        z-index: 99;
        background: #00000000;
        backdrop-filter: blur(40px);
        box-shadow: inset 2px 2px 2px #ff000085, inset 2px -2px 2px #ff000085,
          inset -2px 2px 2px #00ff0085, inset 2px 2px 2px #00ff0085 !important;
      }
      .ball {
        width: 500px;
        height: 500px;
        border-radius: 50% !important;
        position: absolute;
        filter: blur(50px);
        &:nth-child(1) {
          background: #ff0000;
          right: 10%;
          animation: 5s ball1 infinite;
          z-index: 9;
        }
        &:nth-child(2) {
          background: #00ff00;
          left: 10%;
          animation: 5s ball2 infinite;
          z-index: 1;
        }
      }
    }
    &:nth-child(1) {
      .child_card {
        .contents {
          box-shadow: inset 2px 2px 2px #ff000085, inset 2px -2px 2px #ff000085,
            inset -2px 2px 2px #ffd90085, inset 2px 2px 2px #ffd90085 !important;
        }
        .ball {
          &:nth-child(1) {
            background: #f2131d !important;
          }
          &:nth-child(2) {
            background: #f2c400 !important;
          }
        }
      }
    }
    &:nth-child(2) {
      .child_card {
        .contents {
          box-shadow: inset 2px 2px 2px #00b7ff85, inset 2px -2px 2px #00b7ff85,
            inset -2px 2px 2px #ff009d85, inset 2px 2px 2px #ff009d85 !important;
        }
        .ball {
          &:nth-child(1) {
            background: #00b7ff !important;
          }
          &:nth-child(2) {
            background: #ff009d !important;
          }
        }
      }
    }
  }
}

@keyframes ball1 {
  0% {
    transform: rotate(0deg) translateX(50px) translateY(50px);
  }
  100% {
    transform: rotate(360deg) translateX(50px) translateY(50px);
  }
}
@keyframes ball2 {
  0% {
    transform: rotate(360deg) translateX(-50px) translateY(-50px);
  }
  100% {
    transform: rotate(0deg) translateX(-50px) translateY(-50px);
  }
}

@media only screen and (max-width: 960px) {
  section {
    height: 100%;
  }
}
</style>
