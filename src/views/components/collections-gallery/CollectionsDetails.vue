<template>
  <Layouts>
    <section>
      <v-container>
        <v-row dense>
          <v-col cols="6" md="3" sm="6">
            <!-- Sets1 -->
            <div v-for="(item, i) in sets1" :key="i">
              <v-card class="cont text-left">
                <v-img class="img" :src="item.src">
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <v-icon>{{ item.icon }}</v-icon>
                  <strong v-text="item.hist" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>
          <v-col cols="6" md="3" sm="6">
            <!-- Sets2 -->
            <div v-for="(item, i) in sets2" :key="i">
              <v-card class="cont text-left">
                <v-img class="img" :src="item.src">
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <strong v-text="item.hist" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>
          <v-col cols="6" md="3" sm="6">
            <!-- Sets3 -->
            <div v-for="(item, i) in sets3" :key="i">
              <v-card class="cont text-left">
                <v-img class="img" :src="item.src">
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <strong v-text="item.hist" />
                </v-card-subtitle>
              </v-card>
            </div>
          </v-col>
          <v-col cols="6" md="3" sm="6">
            <!-- Sets4 -->
            <div v-for="(item, i) in sets4" :key="i">
              <v-card class="cont text-left">
                <v-img class="img" :src="item.src">
                  <v-card-actions class="back align-end">
                    <v-card-title class="con" />
                  </v-card-actions>
                </v-img>
                <v-card-subtitle class="history">
                  <strong v-text="item.hist" />
                </v-card-subtitle>
              </v-card>
            </div>
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
  data: () => ({
    sets1: [
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/a4/3b/1a/a43b1aeaa65d0b7824d5eabd8c2d64fe.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/e3/a2/79/e3a2793602a1af18a8680dcf9822fb05.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/a6/38/e1/a638e1054a81e8630e0bbbdab341a8d3.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/736x/23/2d/50/232d5074b79feeb25b9ca21564075da5.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/58/5a/6d/585a6d3a4ea41e0f8cb07593e0472051.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/6d/a4/15/6da415226e8308f551f63ea5642aafc7.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/8e/8f/bf/8e8fbfadf9dbf54e309520cc868f8d94.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/ab/43/9d/ab439d492415156543c04571afa24aae.jpg",
      },
    ],
    sets2: [
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/a6/38/e1/a638e1054a81e8630e0bbbdab341a8d3.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/736x/23/2d/50/232d5074b79feeb25b9ca21564075da5.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/a6/2b/ae/a62bae48a6b9ed11671e39b4c75ae1bc.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/7e/28/64/7e2864477d1ea9dc80b39c8fcd38a110.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/c0/15/94/c01594f95f35e507e54bbaf991f1ba5e.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/e3/a2/79/e3a2793602a1af18a8680dcf9822fb05.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/b2/9a/74/b29a74fc078b1e1c8a3fb46e98c28d58.jpg",
      },
    ],
    sets3: [
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/b2/9a/74/b29a74fc078b1e1c8a3fb46e98c28d58.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/29/2c/d6/292cd6f1121093185478a29612acd67c.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/af/08/e2/af08e23c49d453eed9849c9f70c1acc8.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/ae/15/55/ae155532a4263ce5c79d4f2c8d3cffd2.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/a6/2b/ae/a62bae48a6b9ed11671e39b4c75ae1bc.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/7e/28/64/7e2864477d1ea9dc80b39c8fcd38a110.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/c0/15/94/c01594f95f35e507e54bbaf991f1ba5e.jpg",
      },
    ],
    sets4: [
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/29/2c/d6/292cd6f1121093185478a29612acd67c.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/af/08/e2/af08e23c49d453eed9849c9f70c1acc8.jpg",
      },
      {
        hist: "น้องลิซ สาขา วิทคอม",
        src: "https://i.pinimg.com/564x/58/5a/6d/585a6d3a4ea41e0f8cb07593e0472051.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/6d/a4/15/6da415226e8308f551f63ea5642aafc7.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/ab/43/9d/ab439d492415156543c04571afa24aae.jpg",
      },
      {
        hist: "น้องก้อย สาขา บัญชี",
        src: "https://i.pinimg.com/564x/a4/3b/1a/a43b1aeaa65d0b7824d5eabd8c2d64fe.jpg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff81;
$line-color: #ffffff00;

// content
.cont {
  margin: 20px 5px !important;
  border-radius: 20px;
  background: transparent !important;
  box-shadow: none !important;
  color: $text-color;
  .img {
    border-radius: 20px;
    color: $text-color;
    .back {
      height: 100% !important;
      background: linear-gradient(100deg, #d1beaa13 0%, #15141244 60%);
      &:hover {
        background: linear-gradient(100deg, #d1beaa28 0%, #15141275 60%);
      }
    }
  }
  .history {
    font-family: "Prompt", sans-serif;
    color: $text-color;
    padding: 10px 10px;
  }
}
</style>
