<template>
  <Layouts>
    <v-app-bar dark rounded="b-lg" height="80">
      <v-row>
        <v-col class="text-center">
          <h1>RMU FRESHY BOY AND GIRL {{ id }}</h1>
        </v-col>
      </v-row>
    </v-app-bar>
    <section class="px-5 py-2 pb-15">
      <!-- contents -->
      <v-item-group class="back">
        <!-- <v-row dense v-model="selected"> -->
        <v-row dense>
          <v-col v-for="(item, i) in 18" :key="i" cols="6" lg="2" md="3" sm="3">
            <v-card class="content">
              <!-- gradient="to bottom, #eccaa911 0%, #3b353591 120%" -->
              <v-img
                class="card-contests"
                src="https://i.pinimg.com/564x/c3/01/25/c30125d6d9cfa2ec881d088b6e5a1c0f.jpg"
                height="250px"
              >
                <div class="shadow-inset"></div>
              </v-img>
              <!-- title-content -->
              <div class="text-name px-2">
                <h3 class="id title">{{ item.cid }}</h3>
                <h5 class="name">{{ item.name }}</h5>
              </div>
              <!-- header-content -->
              <div class="list-active">
                <v-card-title class="px-2 py-1">
                  <div cols="12" class="head-title text-center">
                    <span class="title">VOTE</span>
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
                        src="https://i.pinimg.com/564x/77/f6/8e/77f68ea939566849943001c3648bf5c3.jpg"
                        contain
                        width="300"
                      ></v-img>
                      <div class="text-center pt-5">
                        <h3>{{ item.name }}</h3>
                        <h4>
                          ร่วมโหวตให้กับผู้เข้าประกวด เพียงสแกน QR Code บนแอพ
                          <br />
                          <span style="color: #dd0303 !important"> True </span>
                          <span style="color: #ffb834 !important">Money</span>
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
            "https://i.pinimg.com/564x/c3/01/25/c30125d6d9cfa2ec881d088b6e5a1c0f.jpg",
        },
      ],
      selected: [],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 auto;
  text-decoration: none;
}

$main-color: #ffb834;
$text-color: #ffcd70;
$red-color: #b30000;
$back-color: #000000;

.bar,
.footer {
  border-radius: 5px !important;
  color: $main-color;
  background-color: #000000bb !important;
  backdrop-filter: blur(50px);
}

// dialog
.dialog-content {
  background-color: $back-color;
  // backdrop-filter: blur(50px);
  .bar {
    position: sticky;
  }
  .text {
    display: flex;
    align-items: center;
    h1 {
      color: $main-color;
    }
    h3 {
      color: $text-color;
    }
  }
}

// Animate face in
.content {
  color: $main-color;
  background-color: $back-color;
  backdrop-filter: blur(50px);
  transition: 0.4s;
  animation: 1s move;
  // &:hover {
  //   transform: scale(1.03);
  // }
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
  }
  .btn:hover {
    box-shadow: inset 3px 3px 0px $main-color, -3px -3px 0px $red-color,
      inset -3px -3px 0px $main-color, 3px 3px 0px $red-color,
      inset 3px -3px 0px $main-color, -3px 3px 0px $red-color,
      inset -3px 3px 0px $main-color, 3px -3px 0px $red-color !important;
  }
}
@keyframes move {
  from {
    top: 30%;
  }
  to {
    top: 0%;
  }
}
</style>
