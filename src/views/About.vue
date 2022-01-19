<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <section>
      <v-container class="text-center pa-10 pb-15">
        <!-- Title -->
        <div>
          <h1 class="head-title">FRESHY BOY AND GIRL</h1>
          <h2 class="subtitle">RAJABHAT MAHASARAKHAM</h2>
        </div>
        <br />
        <!-- Content 1 -->
        <p class="content text-left">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora.
        </p>
        <!-- Photo -->
        <v-card class="photo ma-2 mt-10" hover dark>
          <v-img
            src="https://i.pinimg.com/564x/3a/11/ce/3a11ceff4289fb78982a28eadc35642d.jpg"
          ></v-img>
        </v-card>
        <!-- Description under the picture -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <br />
        <!-- Content 2 -->
        <p class="content text-left">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora. ipsum, dolor sit amet consectetur adipisicing elit.
          Praesentium odit hic veritatis reiciendis minima rerum omnis,
          perferendis at numquam, facilis, libero totam ipsam doloremque
          commodi? Modi possimus commodi nisi tempora. ipsum, dolor sit amet
          consectetur adipisicing elit. Praesentium odit hic veritatis
          reiciendis minima rerum omnis, perferendis at numquam, facilis, libero
          totam ipsam doloremque commodi? Modi possimus commodi nisi tempora.
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          dolorum adipisci pariatur, quasi error nemo, possimus quod, sequi cum
          amet molestiae soluta voluptatum maiores ullam nobis impedit. Alias,
          culpa sed?
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora. ipsum, dolor sit amet consectetur adipisicing elit.
          Praesentium odit hic veritatis reiciendis minima rerum omnis,
          perferendis at numquam, facilis, libero totam ipsam doloremque
          commodi? Modi possimus commodi nisi tempora. ipsum, dolor sit amet
          consectetur adipisicing elit. Praesentium odit hic veritatis
          reiciendis minima rerum omnis, perferendis at numquam, facilis, libero
          totam ipsam doloremque commodi? Modi possimus commodi nisi tempora.
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora. ipsum, dolor sit amet consectetur adipisicing elit.
          Praesentium odit hic veritatis reiciendis minima rerum omnis,
          perferendis at numquam, facilis, libero totam ipsam doloremque
          commodi? Modi possimus commodi nisi tempora. ipsum, dolor sit amet
          consectetur adipisicing elit. Praesentium odit hic veritatis
          reiciendis minima rerum omnis, perferendis at numquam, facilis, libero
          totam ipsam doloremque commodi? Modi possimus commodi nisi tempora.
          ipsum, dolor sit amet consectetur adipisicing elit. Praesentium odit
          hic veritatis reiciendis minima rerum omnis, perferendis at numquam,
          facilis, libero totam ipsam doloremque commodi? Modi possimus commodi
          nisi tempora.
        </p>
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
};
</script>

<style lang="scss" scoped>
$main_color: #ebebeb;

* {
  margin: 0 !important;
  padding: 0 !important;
  color: $main_color;
}

section {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
