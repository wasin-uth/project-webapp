<template>
  <NavigationDrawer>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="freshyLists"
        class="elevation-10"
        light
        :items-per-page="10"
      >
        <!-- Head Bar -->
        <template v-slot:top>
          <v-toolbar flat dark color="gold" rounded="t-sm 0">
            <v-toolbar-title style="color: black">Freshy Boy</v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Dialog Add Data -->
            <v-dialog v-model="dialogAdd" width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="black"
                  style="color: #c29e59"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small class="pa-0 ma-0">mdi-plus</v-icon>
                  เพิ่มข้อมูล
                </v-btn>
              </template>

              <v-card>
                <v-container>
                  <form @submit.prevent="addFreshy">
                    <v-row dense>
                      <!-- <v-col cols="6" md="2">
                        <v-text-field
                          v-model="freshy.no"
                          type="number"
                          label="ลำดับ"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col> -->

                      <v-col cols="6" md="4">
                        <v-text-field
                          v-model="freshy.cId"
                          type="text"
                          label="รหัสเฟรชชี่"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="8">
                        <input
                          class="custom-file-input mb-8"
                          type="file"
                          accept=".jpg,.png"
                          @change="previewImage"
                        />
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="freshy.name"
                          type="text"
                          label="ชื่อ"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="freshy.lastName"
                          type="text"
                          label="นามสกุล"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <v-text-field
                          v-model="freshy.nickName"
                          type="text"
                          label="ชื่อเล่น"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="8">
                        <v-text-field
                          v-model="freshy.faculty"
                          type="text"
                          label="คณะ"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="2">
                        <v-text-field
                          v-model="freshy.height"
                          type="text"
                          label="ส่วนสูง"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="2">
                        <v-text-field
                          v-model="freshy.weight"
                          type="text"
                          label="น้ำหนัก"
                          required
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="8">
                        <v-text-field
                          v-model="freshy.status"
                          type="text"
                          label="สถานะ"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          v-model="freshy.qrcode"
                          type="text"
                          label="ทรูมันนี่วอลเล็ท"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-alert
                          dense
                          text
                          type="success"
                          outlined
                          v-if="messageSuccess"
                        >
                          {{ messageSuccess }}
                        </v-alert>
                      </v-col>

                      <v-col cols="12">
                        <v-progress-linear
                          buffer-value="60"
                          :value="uploadValue"
                          stream
                          color="gold"
                        ></v-progress-linear>
                      </v-col>

                      <v-col cols="12">
                        <v-btn color="gold" type="submit" block>เพิ่ม</v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </v-container>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <!-- ================================================================ -->
        <!-- Profile -->
        <template v-slot:item.profile="{ item }">
          <v-avatar
            size="40"
            rounded="lg"
            style="border: 2px solid"
            color="gold"
          >
            <v-img :src="item.profile"></v-img>
          </v-avatar>
        </template>

        <!-- QR Code -->
        <template v-slot:item.qrcode="{ item }">
          <v-avatar size="40" rounded="0">
            <v-img :src="item.qrcode"></v-img>
          </v-avatar>
        </template>

        <!-- ================================================================ -->
        <!-- Edit/Update -->
        <template v-slot:item.actions="{ item }">
          <v-dialog width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mr-2"
                fab
                x-small
                color="gold"
                elevation="2"
                v-bind="attrs"
                v-on="on"
                @click="
                  getData(
                    item.cId,
                    item.profile,
                    item.name,
                    item.lastName,
                    item.nickName,
                    item.faculty,
                    item.height,
                    item.weight,
                    item.status,
                    item.qrcode,
                    item.id
                  )
                "
              >
                <v-icon color="black">mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-container>
                <form @submit.prevent="update">
                  <v-row dense>
                    <!-- <v-col cols="6" md="2">
                      <v-text-field
                        v-model="dataFreshy.no"
                        type="text"
                        label="ลำดับ"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col> -->

                    <v-col cols="6" md="4">
                      <v-text-field
                        v-model="dataFreshy.cId"
                        type="text"
                        label="รหัสเฟรชชี่"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-text-field
                        v-model="dataFreshy.profile"
                        placeholder="Image"
                        type="text"
                        label="เปลี่ยนรูปโปรไฟล์"
                        accept=".jpg,.png"
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        v-model="dataFreshy.name"
                        type="text"
                        label="ชื่อ"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        v-model="dataFreshy.lastName"
                        type="text"
                        label="นามสกุล"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6" md="4">
                      <v-text-field
                        v-model="dataFreshy.nickName"
                        type="text"
                        label="ชื่อเล่น"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6" md="8">
                      <v-text-field
                        v-model="dataFreshy.faculty"
                        type="text"
                        label="คณะ"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6" md="2">
                      <v-text-field
                        v-model="dataFreshy.height"
                        type="text"
                        label="ส่วนสูง"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6" md="2">
                      <v-text-field
                        v-model="dataFreshy.weight"
                        type="text"
                        label="น้ำหนัก"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-text-field
                        v-model="dataFreshy.status"
                        type="text"
                        label="สถานะ"
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="dataFreshy.qrcode"
                        type="text"
                        label="ทรูมันนี่วอลเล็ท"
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-alert dense text type="success" v-if="messageUpdate">
                        {{ messageUpdate }}
                      </v-alert>
                    </v-col>

                    <v-col cols="12">
                      <v-card-actions>
                        <v-row class="text-center">
                          <!-- <v-col>
                              <v-btn color="red" @click="dialogEdit = false">
                                Cancel
                              </v-btn>
                            </v-col> -->
                          <v-col cols="12">
                            <v-btn
                              color="gold"
                              type="submit"
                              block
                              style="color: black"
                            >
                              ยืนยัน
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </form>
              </v-container>
            </v-card>
          </v-dialog>

          <!-- ================================================================ -->
          <!-- Dialog Delete -->
          <v-dialog width="400">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                x-small
                elevation="2"
                color="red"
                light
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-container>
                <v-card-title>
                  <v-row class="text-center">
                    <v-col cols="12">
                      <h3>คุณยืนยันที่จะลบรายการนี้ออกหรือไม่</h3>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-actions>
                  <v-row class="text-center">
                    <!-- <v-col>
                        <v-btn color="red"> Cancel </v-btn>
                      </v-col> -->
                    <v-col cols="12">
                      <v-btn
                        color="red"
                        block
                        @click="deleteFreshy(item.id)"
                        style="color: black"
                      >
                        ยืนยัน
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-container>
  </NavigationDrawer>
</template>

<script>
import NavigationDrawer from "@/layouts/AdminLayouts.vue";
import { db, storage } from "@/database/firebase.js";

export default {
  components: {
    NavigationDrawer,
  },
  data() {
    return {
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      // Table Header
      headers: [
        // { text: "ลำดับ", value: "no" },
        { text: "รหัสเฟรชชี่", value: "cId", align: "start" },
        { text: "โปรไฟล์", value: "profile", sortable: false },
        { text: "ชื่อ", value: "name" },
        { text: "นามสกุล", value: "lastName", sortable: false },
        { text: "ชื่อเล่น", value: "nickName", sortable: false },
        { text: "คณะ", value: "faculty", sortable: false },
        { text: "ส่วนสูง (ซม.)", value: "height", sortable: false },
        { text: "น้ำหนัก (กก.)", value: "weight", sortable: false },
        { text: "สถานะ", value: "status", sortable: false },
        { text: "ทรูมันนี่วอลเล็ท", value: "qrcode", sortable: false },
        { text: "แก้ไข / ลบ", value: "actions", sortable: false },
      ],
      // getData
      freshy: {
        // no: 0,
        cId: "fb",
        profile: "",
        name: "",
        lastName: "",
        nickName: "",
        faculty: "",
        height: 0,
        weight: 0,
        status: "",
        qrcode: "",
      },
      // UpdateData
      dataFreshy: {
        // no: "",
        cId: "",
        profile: "",
        name: "",
        lastName: "",
        nickName: "",
        faculty: "",
        height: "",
        weight: "",
        status: "",
        qrcode: "",
        id: "",
      },
      // image
      uploadValue: 0,
      picture: null,
      imageData: null,
      imageName: "",

      // Reference form Firestore("url collecction")
      ref: db.collection("/rmufreshyboyandgirl/2019/freshyboy"),
      freshyLists: [],

      // Message
      messageUpdate: "",
      messageSuccess: "",
    };
  },

  created() {
    // GetData
    this.ref.onSnapshot((querySnapshot) => {
      this.freshyLists = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          this.freshyLists.push({
            id: doc.id,
            // no: doc.data().no,
            cId: doc.data().cId,
            profile: doc.data().profile,
            name: doc.data().name,
            lastName: doc.data().lastName,
            nickName: doc.data().nickName,
            faculty: doc.data().faculty,
            height: doc.data().height,
            weight: doc.data().weight,
            status: doc.data().status,
            qrcode: doc.data().qrcode,
          });
        }
      });
    });
  },

  methods: {
    // Add Data for Table
    addFreshy() {
      //  upload image start here
      this.picture = null;
      const storageRef = storage
        .ref(`freshyboy2019/${this.imageName}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            // console.log(url);
            this.freshy.profile = url;
            this.ref
              .add(this.freshy)
              .then(() => {
                this.messageSuccess = "เพิ่มข้อมูลสำเร็จ";
              })
              .then(() => {
                // this.freshy.no = "";
                this.freshy.cId = "";
                this.freshy.profile = "";
                this.freshy.name = "";
                this.freshy.lastName = "";
                this.freshy.nickName = "";
                this.freshy.faculty = "";
                this.freshy.height = "";
                this.freshy.weight = "";
                this.freshy.status = "";
                this.freshy.qrcode = "";
              });
          });
        }
      );

      //  upload image end here
    },

    // getData for Update
    getData(
      // no,
      cId,
      profile,
      name,
      lastName,
      nickName,
      faculty,
      height,
      weight,
      status,
      qrcode,
      id
    ) {
      // this.dataFreshy.no = no;
      this.dataFreshy.cId = cId;
      this.dataFreshy.profile = profile;
      this.dataFreshy.name = name;
      this.dataFreshy.lastName = lastName;
      this.dataFreshy.nickName = nickName;
      this.dataFreshy.faculty = faculty;
      this.dataFreshy.height = height;
      this.dataFreshy.weight = weight;
      this.dataFreshy.status = status;
      this.dataFreshy.qrcode = qrcode;
      this.dataFreshy.id = id;
    },

    // Update Data
    update() {
      console.log(this.dataFreshy.id);
      this.ref
        .doc(this.dataFreshy.id)
        .update({
          // no: this.dataFreshy.no,
          cId: this.dataFreshy.cId,
          profile: this.dataFreshy.profile,
          name: this.dataFreshy.name,
          lastName: this.dataFreshy.lastName,
          nickName: this.dataFreshy.nickName,
          faculty: this.dataFreshy.faculty,
          height: this.dataFreshy.height,
          weight: this.dataFreshy.weight,
          status: this.dataFreshy.status,
          qrcode: this.dataFreshy.qrcode,
        })
        .then(() => {
          this.messageUpdate = "อัพเดทสำเร็จ!";
        });
    },

    // Delete
    deleteFreshy(id) {
      this.ref.doc(id).delete();
    },

    // Image
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.imageName = event.target.files[0].name;
    },
  },
};
</script>

<style lang="scss" scoped>
// Custom File Input
.custom-file-input {
  width: 100%;
  border: 1px solid;
  padding: 12px;
  border-radius: 5px;
  border-color: #0000007c;
  opacity: 0.7;
  cursor: pointer;
  &::-webkit-file-upload-button {
    visibility: hidden;
    width: 0px;
  }
  &::before {
    content: "เลือกรูปภาพ";
  }
  &:hover {
    border-color: #000000;
  }
}
</style>
