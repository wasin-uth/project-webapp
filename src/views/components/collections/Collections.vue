<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <!-- Contents -->
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
            <v-card class="contents" elevation="5" dark rounded="lg">
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
                          :to="`/collection/${item.id}`"
                          dark
                          color="#000000ee"
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
import Bar from "@/components/navigation/BarContents.vue";

export default {
  name: "Home",
  components: {
    Layouts,
    Bar,
  },
  data() {
    return {
      collections: [
        // {
        //   id: 2021,
        //   src: "https://i.pinimg.com/564x/40/c0/83/40c083a696d18e7dc5096585598521e0.jpg",
        // },
        // {
        //   id: 2020,
        //   src: "https://i.pinimg.com/564x/05/17/77/051777b5d21eb07ecda0162b61db65c7.jpg",
        // },
        {
          id: 2019,
          src: "https://firebasestorage.googleapis.com/v0/b/webapp-dd881.appspot.com/o/cover-collections%2F2019.jpg?alt=media&token=c52e8678-e864-4f8d-b1ee-a3706cc16404",
        },
        {
          id: 2018,
          src: "https://firebasestorage.googleapis.com/v0/b/webapp-dd881.appspot.com/o/cover-collections%2F2018.jpg?alt=media&token=e08071f6-dcce-471a-b4b4-26649913f2bf",
        },
        {
          id: 2017,
          src: "https://firebasestorage.googleapis.com/v0/b/webapp-dd881.appspot.com/o/cover-collections%2F2017.jpg?alt=media&token=d5d8a3ff-4347-43e5-9f37-2d61fb409592",
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

section {
  .contents {
    overflow: hidden;
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
      animation: span2 2s linear infinite;
      animation-delay: 1s;
    }
  }

  // .btn:hover {}
  &:hover {
    transition: all 0.5s;
    transform: rotate(-3deg) scale(1.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
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
