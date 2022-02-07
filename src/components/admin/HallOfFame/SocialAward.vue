<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="freshyLists"
        class="elevation-10"
        light
        :items-per-page="5"
      >
        <!-- Head Bar -->
        <template v-slot:top>
          <v-toolbar flat dark color="gold" rounded="t-sm 0">
            <v-toolbar-title style="color: black"
              >Social Award Freshy Boy & Girl</v-toolbar-title
            >
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
                      <v-col cols="4">
                        <v-text-field
                          v-model="freshy.cId"
                          type="text"
                          label="รหัสเฟรชชี่"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="8">
                        <v-text-field
                          v-model="freshy.faculty"
                          type="text"
                          label="คณะ"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <input
                          class="custom-file-input mb-8"
                          type="file"
                          accept=".jpg,.png"
                          @change="previewImage"
                        />
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="freshy.reward"
                          type="text"
                          label="ตำแหน่ง"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="freshy.nickName"
                          type="text"
                          label="ชื่อเล่น"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="freshy.name"
                          type="text"
                          label="ชื่อ"
                          color="gold"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6">
                        <v-text-field
                          v-model="freshy.lastName"
                          type="text"
                          label="นามสกุล"
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
        <template v-slot:item.image="{ item }">
          <v-avatar
            class="my-1"
            width="40"
            height="80"
            rounded="lg"
            style="border: 2px solid"
            color="gold"
          >
            <v-img :src="item.image"></v-img>
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
                    item.faculty,
                    item.image,
                    item.reward,
                    item.nickName,
                    item.name,
                    item.lastName,
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
                    <v-col cols="4">
                      <v-text-field
                        v-model="dataFreshy.cId"
                        type="text"
                        label="รหัสเฟรชชี่"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="8">
                      <v-text-field
                        v-model="dataFreshy.faculty"
                        type="text"
                        label="คณะ"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="dataFreshy.image"
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
                        v-model="dataFreshy.reward"
                        type="text"
                        label="ตำแหน่ง"
                        required
                        color="gold"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        v-model="dataFreshy.nickName"
                        type="text"
                        label="ชื่อเล่น"
                        required
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

                    <v-col cols="12">
                      <v-alert dense text type="success" v-if="messageUpdate">
                        {{ messageUpdate }}
                      </v-alert>
                    </v-col>

                    <v-col cols="12">
                      <v-card-actions>
                        <v-row class="text-center">
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
  </div>
</template>

<script>
import { db, storage } from "@/database/firebase.js";

export default {
  data() {
    return {
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      // Table Header
      headers: [
        { text: "รูปภาพ", value: "image", sortable: false, align: "start" },
        { text: "รหัสเฟรชชี่", value: "cId" },
        { text: "คณะ", value: "faculty", sortable: false },
        { text: "ตำแหน่ง", value: "reward", sortable: false },
        { text: "ชื่อเล่น", value: "nickName", sortable: false },
        { text: "ชื่อ", value: "name", sortable: false },
        { text: "นามสกุล", value: "lastName", sortable: false },
        { text: "แก้ไข / ลบ", value: "actions", sortable: false },
      ],
      // getData
      freshy: {
        cId: "",
        faculty: "",
        image: "",
        reward: "",
        nickName: "",
        name: "",
        lastName: "",
      },
      // UpdateData
      dataFreshy: {
        cId: "",
        faculty: "",
        image: "",
        reward: "",
        nickName: "",
        name: "",
        lastName: "",
        id: "",
      },
      // image
      uploadValue: 0,
      picture: null,
      imageData: null,
      imageName: "",

      // Reference form Firestore("url collecction")
      ref: db.collection(
        "/rmufreshyboyandgirl/2018/hall-of-fame/OCaAPC3wMthWXP75nc1s/social-award"
      ),
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
            cId: doc.data().cId,
            faculty: doc.data().faculty,
            image: doc.data().image,
            reward: doc.data().reward,
            nickName: doc.data().nickName,
            name: doc.data().name,
            lastName: doc.data().lastName,
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
        .ref(`halloffame2018/${this.imageName}`)
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
            this.freshy.image = url;
            this.ref
              .add(this.freshy)
              .then(() => {
                this.messageSuccess = "เพิ่มข้อมูลสำเร็จ";
              })
              .then(() => {
                this.freshy.cId = "";
                this.freshy.faculty = "";
                this.freshy.image = "";
                this.freshy.reward = "";
                this.freshy.nickName = "";
                this.freshy.name = "";
                this.freshy.lastName = "";
              });
          });
        }
      );

      //  upload image end here
    },

    // getData for Update
    getData(cId, faculty, image, reward, nickName, name, lastName, id) {
      this.dataFreshy.cId = cId;
      this.dataFreshy.faculty = faculty;
      this.dataFreshy.image = image;
      this.dataFreshy.reward = reward;
      this.dataFreshy.nickName = nickName;
      this.dataFreshy.name = name;
      this.dataFreshy.lastName = lastName;
      this.dataFreshy.id = id;
    },

    // Update Data
    update() {
      console.log(this.dataFreshy.id);
      this.ref
        .doc(this.dataFreshy.id)
        .update({
          cId: this.dataFreshy.cId,
          faculty: this.dataFreshy.faculty,
          image: this.dataFreshy.image,
          reward: this.dataFreshy.reward,
          nickName: this.dataFreshy.nickName,
          name: this.dataFreshy.name,
          lastName: this.dataFreshy.lastName,
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
