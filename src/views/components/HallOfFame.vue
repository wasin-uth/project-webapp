<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <section class="pa-2 pb-15">
      <v-container class="pb-8">
        <!-- Freshy Boy and Girl RMU -->
        <div class="award_winning pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลชนะเลิศ Freshy Boy and Girl 2021</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in database"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card class="profile" elevation="10" dark rounded="xl">
                      <v-img
                        class="img"
                        :src="item.freshy"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1>{{ item.cid }}</h1>
                          <h2>{{ item.reward }}</h2>
                          <h3>{{ item.branch }}</h3>
                          <h3>{{ item.nickname }} || {{ item.name }}</h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- 1st-->
        <div class="one_st pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลรองชนะเลิศ อันดับ 1 Freshy Boy and Girl RMU</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in database"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.freshy"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1>{{ item.cid }}</h1>
                          <h2>{{ item.reward }}</h2>
                          <h3>{{ item.branch }}</h3>
                          <h3>{{ item.nickname }} || {{ item.name }}</h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- 2nd -->
        <div class="two_nd pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลรองชนะเลิศ อันดับ 2 Freshy Boy and Girl RMU</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in database"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.freshy"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1>{{ item.cid }}</h1>
                          <h2>{{ item.reward }}</h2>
                          <h3>{{ item.branch }}</h3>
                          <h3>{{ item.nickname }} || {{ item.name }}</h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- PopularVote -->
        <div class="popular_vote pb-10">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัล Popular Vote</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in database"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.freshy"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1>{{ item.cid }}</h1>
                          <h2>{{ item.reward }}</h2>
                          <h3>{{ item.branch }}</h3>
                          <h3>{{ item.nickname }} || {{ item.name }}</h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>

        <!-- รางวัลขวัญใจมหาชน -->
        <div class="favorite">
          <v-app-bar class="bar" dark rounded="lg" height="80">
            <v-row>
              <v-col class="text-center">
                <h1>รางวัลขวัญใจมหาชน</h1>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- Contents -->
          <v-row>
            <v-col
              class="contents pa-2"
              cols="12"
              lg="6"
              md="6"
              v-for="(item, i) in database"
              :key="i"
            >
              <v-sheet class="sheet" color="transparent" dark>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="profile"
                      elevation="10"
                      dark
                      rounded="r-0 l-xl"
                    >
                      <v-img
                        class="img"
                        :src="item.freshy"
                        lazy-src="@/assets/image/lazy_src.png"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col class="win" cols="8">
                    <div class="contents">
                      <v-card
                        class="card"
                        rounded="l-0 r-xl"
                        elevation="10"
                        dark
                      >
                        <v-card-text class="text">
                          <h1>{{ item.cid }}</h1>
                          <h2>{{ item.reward }}</h2>
                          <h3>{{ item.branch }}</h3>
                          <h3>{{ item.nickname }} || {{ item.name }}</h3>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
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
      id: 2021,
      database: [
        {
          cid: "FB01",
          reward: "Freshy Boy มหาวิทยาลัยราชภัฏมหาสารคาม",
          branch: "คณะ วิทยาศาสตร์และเทคโนโลยี",
          nickname: "ไนล์",
          name: "ไนล์ ณภัทร์",
          freshy:
            "https://i.pinimg.com/564x/6b/ea/ec/6beaec5d5554b516d809773272699186.jpg",
        },
        {
          cid: "FG01",
          reward: "Freshy Girl มหาวิทยาลัยราชภัฏมหาสารคาม",
          branch: "คณะ วิทยาศาสตร์และเทคโนโลยี",
          nickname: "อั้ม",
          name: "อั้ม พัชราภา",
          freshy:
            "https://i.pinimg.com/564x/6c/01/cb/6c01cbd44b32fd816d5de787355e35a8.jpg",
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

$red: #ff080083;
$green: #2ebd268a;

.bar {
  background: #000000bb !important;
  color: #c29e59 !important;
}

section {
  // Winning
  .award_winning {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-right: 5px solid;
          border-bottom: 5px solid;
          border-color: #e6bb6b;
          border-radius: 20px;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: linear-gradient(0deg, #000000 0%, #ebebeb00 100%);
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #c29e59;
            width: 100%;
            .text {
              height: 300px;
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #c29e59;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #ebebeb;
      }
    }
  }

  // 1st
  .one_st {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #e6bb6b;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: #00000000;
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #c29e59;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #c29e59;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #ebebeb;
      }
    }
  }

  // 2nd
  .two_nd {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #e6bb6b;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: #000000bb;
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #c29e59;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #c29e59;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #ebebeb;
      }
    }
  }

  // Popular Vote
  .popular_vote {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #000000;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: linear-gradient(
              -45deg,
              #e11a22 10%,
              #97090d 50%,
              #ea7b20 50%,
              #f1c407 100%
            );
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #000000;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #000000;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #161515;
      }
    }
  }

  // People's Favorite
  .favorite {
    .contents {
      .sheet {
        padding: 10px !important;
        overflow: hidden;
        .profile {
          width: 100%;
          height: 400px;
          border-bottom: 5px solid;
          border-color: #000000;
          overflow: hidden;
          .img {
            height: 100%;
            border-radius: 0px;
          }
        }
        .contents {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          .card {
            background: linear-gradient(
              -45deg,
              #5f7086 0%,
              #11193c 15%,
              #435568 40%,
              #d8b21a 75%,
              #9a9da3 100%
            );
            border-right: 5px solid;
            border-bottom: 5px solid;
            border-color: #000000;
            height: 100%;
            width: 100%;
            .text {
              padding: 15px !important;
              line-height: 1.8 !important;
              h2 {
                color: #000000;
              }
            }
          }
        }
      }
      h1,
      h3 {
        color: #161515;
      }
    }
  }
}
</style>
