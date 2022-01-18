<template>
  <Layouts>
    <v-app-bar class="bar" dark rounded="b-lg" height="80">
      <v-row>
        <v-col class="text-center">
          <h1>{{ this.$route.name }}</h1>
        </v-col>
      </v-row>
    </v-app-bar>
    <section class="px-5 py-2 pb-15">
      <v-container>
        <v-row>
          <v-col
            class="pa-2"
            cols="12"
            lg="4"
            md="4"
            sm="6"
            v-for="(item, i) in collections"
            :key="i"
          >
            <v-card class="contents" elevation="0">
              <v-img
                class="photo"
                height="450"
                :src="item.src"
                lazy-src="@/assets/image/lazy_srcvideos.png"
              >
                <template>
                  <div class="actions">
                    <v-card-actions>
                      <div class="wrapper">
                        <v-btn
                          class="btn pl-8"
                          width="200"
                          :to="`/collections/${item.id}`"
                        >
                          {{ item.id }}
                          <span></span>
                          <span></span>
                        </v-btn>
                      </div>
                    </v-card-actions>
                    <div class="shadow"></div>
                  </div>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
      collections: [
        {
          id: 2021,
          src: "https://i.pinimg.com/564x/40/c0/83/40c083a696d18e7dc5096585598521e0.jpg",
        },
        {
          id: 2020,
          src: "https://i.pinimg.com/564x/05/17/77/051777b5d21eb07ecda0162b61db65c7.jpg",
        },
        {
          id: 2019,
          src: "https://i.pinimg.com/564x/59/77/b5/5977b52f3490f0a9861e24283b5f54c5.jpg",
        },
        {
          id: 2018,
          src: "https://i.pinimg.com/564x/49/79/60/49796022a1c46048817f09866ba43375.jpg",
        },
        {
          id: 2017,
          src: "https://i.pinimg.com/564x/23/75/82/2375826232a4669779e43eab189e52e1.jpg",
        },
        {
          id: 2016,
          src: "https://i.pinimg.com/564x/d1/17/86/d11786636e1546d6dd32f619c0cf9199.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: center !important;
}

.bar,
.btn {
  background: #000000ee !important;
}

section {
  .contents {
    overflow: hidden;
    border-radius: 10px !important;
    .photo {
      transition: 0.5s ease-in-out;
      .actions {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;
        .shadow {
          background: #0000006c;
          width: 100%;
          height: 100%;
          position: absolute;
          transition: 0.5s ease-in-out;
          z-index: 1;
        }
      }
      &:hover {
        transform: scale(1.3);
        .btn {
          transform: scale(0.8);
        }
        .shadow {
          background: #00000027;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 1;
        }
      }
    }
  }
}

// Button
.btn {
  backdrop-filter: blur(2px) !important;
  font-size: 24px;
  letter-spacing: 20px;
  transition: 0.5s ease-in-out;
  z-index: 9;
  position: relative;
  overflow: hidden;
  span {
    position: absolute;
    display: block;
    // span 1
    &:nth-child(1) {
      height: 3px;
      width: 200px;
      top: 0px;
      left: -200px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0), #f6e58d);
      // border-top-right-radius: 1px;
      // border-bottom-right-radius: 1px;
      animation: span1 2s linear infinite;
      animation-delay: 1s;
    }
    // span 2
    &:nth-child(2) {
      height: 3px;
      width: 200px;
      right: -200px;
      bottom: 0px;
      background: linear-gradient(to left, rgba(0, 0, 0, 0), #f6e58d);
      // border-top-left-radius: 1px;
      // border-bottom-left-radius: 1px;
      animation: span2 2s linear infinite;
      animation-delay: 1s;
    }
  }

  // .btn:hover {}
  &:hover {
    transition: all 0.5s;
    transform: rotate(-3deg) scale(1.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
    // span {
    //   animation-play-state: paused;
    // }
  }
}

@keyframes span1 {
  0% {
    left: -200px;
  }
  100% {
    left: 200px;
  }
}
@keyframes span2 {
  0% {
    right: -200px;
  }
  100% {
    right: 200px;
  }
}
</style>
