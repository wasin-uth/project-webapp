<template>
  <Layouts>
    <section class="py-15">
      <v-row class="content">
        <v-col
          cols="12"
          lg="4"
          md="3"
          v-for="(item, i) in collections"
          :key="i"
        >
          <v-card class="card-content" elevation="0">
            <v-img height="450" class="photo" :src="item.src">
              <v-card-actions class="back">
                <v-card-text class="contents">
                  <h1>{{ item.title }} {{ item.id }}</h1>
                  <v-btn
                    class="btn my-4"
                    dark
                    width="150"
                    :to="`/collections/${item.id}`"
                  >
                    Visit
                  </v-btn>
                </v-card-text>
              </v-card-actions>
            </v-img>
          </v-card>
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
      collections: [
        {
          id: 2021,
          title: "Collections",
          src: "https://i.pinimg.com/564x/40/c0/83/40c083a696d18e7dc5096585598521e0.jpg",
        },
        {
          id: 2020,
          title: "Collections",
          src: "https://i.pinimg.com/564x/05/17/77/051777b5d21eb07ecda0162b61db65c7.jpg",
        },
        {
          id: 2019,
          title: "Collections",
          src: "https://i.pinimg.com/564x/59/77/b5/5977b52f3490f0a9861e24283b5f54c5.jpg",
        },
        {
          id: 2018,
          title: "Collections",
          src: "https://i.pinimg.com/564x/49/79/60/49796022a1c46048817f09866ba43375.jpg",
        },
        {
          id: 2017,
          title: "Collections",
          src: "https://i.pinimg.com/564x/23/75/82/2375826232a4669779e43eab189e52e1.jpg",
        },
        {
          id: 2016,
          title: "Collections",
          src: "https://i.pinimg.com/564x/d1/17/86/d11786636e1546d6dd32f619c0cf9199.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$main-color: #ffb834;
$bg-color: #0404032c;
* {
  color: $main-color;
  margin: 0 auto !important;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  .card-content {
    transition: 0.8s;
    background-color: transparent !important;
    border-radius: 5px !important;
    overflow: hidden;
    position: relative;
    .back {
      background-color: #00000042 !important;
      box-shadow: inset 10px 10px 60px 40px #00000062 !important;
      background-color: $bg-color;
      justify-content: center;
      transition: 1s;
      height: 100%;
      &:hover {
        background-color: #0000008f !important;
        box-shadow: none !important;
        .contents {
          transform: scale(1);
        }
      }
    }
    .photo {
      transition: 1s;
      &:hover {
        transform: scale(1.2);
      }
    }
    .contents {
      transition: 1s;
      text-align: center;
      transform: scale(1.2);
    }
    .btn {
      color: $main-color;
    }
  }
}
</style>
