<template>
  <div>
    <v-app-bar elevation="2" dark floating rounded="br-lg">
      <v-btn icon dark plain @click="drawer = !drawer">
        <v-icon color="gold">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      width="200"
      light
      permanent
      floating
    >
      <v-app-bar class="logo" elevation="2" dark>
        <v-img
          src="@/assets/logo/logo_name.png"
          contain
          max-width="100"
        ></v-img>
      </v-app-bar>
      <v-list dense>
        <v-list-item-group active-class="gold">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
            :to="item.route"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          name: "แอดมิน",
          route: "/admins",
        },
        {
          name: "ข้อมูลผู้เข้าประกวดชาย",
          route: "/admin/freshy-boy",
        },
        {
          name: "ข้อมูลผู้เข้าประกวดหญิง",
          route: "/admin/freshy-girl",
        },
        {
          name: "รูปแสดงหน้าเว็บ",
          route: "/admin/image-show",
        },
        {
          name: "รูปโหวต",
          route: "/admin/image-vote",
        },
        {
          name: "คอลเลคชั่น",
          route: "/admin/upload-collection",
        },
        {
          name: "หอเกียรติยศ",
          route: "/admin/upload-hall-of-fame",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
