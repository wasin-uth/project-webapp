<template>
  <Layouts>
    <v-app-bar dark color="#000000bb" rounded="b-lg" height="80">
      <v-row>
        <v-col class="text-center">
          <h1>{{ this.$route.name }} {{ id }}</h1>
        </v-col>
      </v-row>
    </v-app-bar>
    <section class="pb-15">
      <!-- contents -->
      <v-item-group class="back">
        <!-- <v-row dense v-model="selected"> -->
        <v-row>
          <!-- Freshy Boy -->
          <v-col class="pa-2" cols="6">
            <v-container>
              <v-row dense>
                <v-col
                  class="pa-2"
                  cols="12"
                  lg="4"
                  md="6"
                  sm="6"
                  v-for="(item, i) in 9"
                  :key="i"
                >
                  <v-card class="content">
                    <v-img
                      class="card-contests"
                      :src="item.profile"
                      lazy-src="@/assets/image/lazy_src.png"
                      height="300px"
                    >
                      <div class="shadow-inset"></div>
                    </v-img>
                    <!-- title-content -->
                    <div class="text-name px-2">
                      <h1 class="id">{{ item.cid }}FB01</h1>
                      <h5 class="name">{{ item.name }}Name</h5>
                    </div>
                    <!-- header-content -->
                    <div class="list-active">
                      <v-card-title class="px-2 py-1">
                        <div cols="12" class="head-title text-center">
                          <span>VOTE</span>
                        </div>
                      </v-card-title>
                    </div>
                    <!-- footer-content || button -->
                    <div class="list-active-2">
                      <v-card-actions class="pa-2">
                        <v-dialog width="500">
                          <template v-slot:activator="{ attrs, on }">
                            <v-btn block class="btn" v-bind="attrs" v-on="on">
                              <v-img
                                src="https://www.gump.in.th/uploaded_files/img/TAN/wallet-logo.png"
                                max-height="60"
                                max-width="60"
                              ></v-img>
                            </v-btn>
                          </template>
                          <!-- dialog-content -->
                          <v-card class="pa-10">
                            <v-img
                              class="qr_code"
                              src="https://i.pinimg.com/564x/77/f6/8e/77f68ea939566849943001c3648bf5c3.jpg"
                              contain
                              width="300"
                            ></v-img>
                            <div class="text-center pt-5">
                              <h3>{{ item.name }}</h3>
                              <h4>
                                ร่วมโหวตให้กับผู้เข้าประกวด เพียงสแกน QR Code
                                บนแอพ
                                <br />
                                <span style="color: #dd0303 !important">
                                  True
                                </span>
                                <span style="color: #ffb834 !important"
                                  >Money</span
                                >
                                Wallet
                              </h4>
                              <h4 class="warning">1 บาท = 1 คะแนน</h4>
                            </div>
                          </v-card>
                        </v-dialog>
                      </v-card-actions>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <!-- Freshy Girl -->
          <v-col class="pa-2" cols="6">
            <v-container>
              <v-row dense>
                <v-col
                  class="pa-2"
                  cols="12"
                  lg="4"
                  md="6"
                  sm="6"
                  v-for="(item, i) in 9"
                  :key="i"
                >
                  <v-card class="content">
                    <v-img
                      class="card-contests"
                      :src="item.profile"
                      lazy-src="@/assets/image/lazy_src.png"
                      height="300px"
                    >
                      <div class="shadow-inset"></div>
                    </v-img>
                    <!-- title-content -->
                    <div class="text-name px-2">
                      <h1 class="id">{{ item.cid }}FG01</h1>
                      <h5 class="name">{{ item.name }}Name</h5>
                    </div>
                    <!-- header-content -->
                    <div class="list-active">
                      <v-card-title class="px-2 py-1">
                        <div cols="12" class="head-title text-center">
                          <span>VOTE</span>
                        </div>
                      </v-card-title>
                    </div>
                    <!-- footer-content || button -->
                    <div class="list-active-2">
                      <v-card-actions class="pa-2">
                        <v-dialog width="500">
                          <template v-slot:activator="{ attrs, on }">
                            <v-btn block class="btn" v-bind="attrs" v-on="on">
                              <v-img
                                src="https://www.gump.in.th/uploaded_files/img/TAN/wallet-logo.png"
                                max-height="60"
                                max-width="60"
                              ></v-img>
                            </v-btn>
                          </template>

                          <!-- dialog-content -->
                          <v-card class="pa-10">
                            <v-img
                              class="qr_code"
                              src="https://i.pinimg.com/564x/77/f6/8e/77f68ea939566849943001c3648bf5c3.jpg"
                              contain
                              width="300"
                            ></v-img>
                            <div class="text-center pt-5">
                              <h1>{{ item.name }}</h1>
                              <h4>
                                ร่วมโหวตให้กับผู้เข้าประกวด เพียงสแกน QR Code
                                บนแอพ
                                <br />
                                <span style="color: #dd0303 !important">
                                  True
                                </span>
                                <span style="color: #ffb834 !important"
                                  >Money</span
                                >
                                Wallet
                              </h4>
                              <h4 class="warning">1 บาท = 1 คะแนน</h4>
                            </div>
                          </v-card>
                        </v-dialog>
                      </v-card-actions>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-item-group>
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
      id: 2021,
      dialog: false,
      dataLists: [
        {
          cid: "FB02",
          name: "Name",
          profile:
            "https://scontent.fnak1-1.fna.fbcdn.net/v/t1.6435-9/37627994_1685892651459528_7009516996509302784_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGHUaNxYiZdto8ur7HkdQWeX7TKoM6nwH1ftMqgzqfAfWoxgvkuBlTSIz1tFQj-3xzLXB-M49ryIoItev-hoD1t&_nc_ohc=MZvfYSiyd8cAX_FSoC0&_nc_ht=scontent.fnak1-1.fna&oh=00_AT9saMKGrXiQMLms2Ukr-ntZPIctNSl07DyLL6TqZZyWfA&oe=62078BB9",
        },
      ],
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
  text-decoration: none;
}

$main-color: #ffb834;
$red-color: #b30000;
$back-color: #000000;

h3,
h4 {
  color: #000000 !important;
}

// Contests
.content {
  background-color: $back-color;
  backdrop-filter: blur(50px);
  transition: 0.4s;
  .shadow-inset {
    box-shadow: inset 0px -60px 50px -20px $back-color;
    width: 100%;
    height: 100%;
  }
  .text-name {
    position: absolute;
    bottom: 25%;
    width: 100%;
    height: 20%;
  }
  .head-title {
    font-weight: bold;
    font-size: 18px;
    margin: 0 auto !important;
  }
  .btn:hover {
    box-shadow: inset 3px 3px 0px $main-color, -3px -3px 0px $red-color,
      inset -3px -3px 0px $main-color, 3px 3px 0px $red-color,
      inset 3px -3px 0px $main-color, -3px 3px 0px $red-color,
      inset -3px 3px 0px $main-color, 3px -3px 0px $red-color !important;
  }
}

.qr_code {
  margin: 0 auto !important;
}
</style>
