<script>
// import firestore from "/database/firebase"
export default {
    created() {
    const data = [
      {
        id: "01",
        cid: "FB-01",
        type: "เฟรชชี่บอย",
        name: "นายเอ เฟรชชี่",
        nickName: "เอ",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/b4/d7/dc/b4d7dc7fcee41375e778683ed2f67f8f.jpg",
      },
      {
        id: "02",
        cid: "FG-01",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวบี เฟรชชี่",
        nickName: "บี",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/93/5a/c3/935ac3ad4b417bde2c559c0060ac1ba8.jpg",
      },
      {
        id: "03",
        cid: "FB-02",
        type: "เฟรชชี่บอย",
        name: "นายซี เฟรชชี่",
        nickName: "ซี",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/9e/66/29/9e66293904481240e81491ef17c7a49e.jpg",
      },
      {
        id: "04",
        cid: "FG-02",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวดี เฟรชชี่",
        nickName: "ดี",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/f8/36/3b/f8363b920ca2b6928175ab7d1d50b25b.jpg",
      },
      {
        id: "05",
        cid: "FB-03",
        type: "เฟรชชี่บอย",
        name: "นายอี เฟรชชี่",
        nickName: "อี",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/00/5f/1a/005f1a53b8fd34262cc5babb94b71913.jpg",
      },
      {
        id: "06",
        cid: "FG-03",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวเอฟ เฟรชชี่",
        nickName: "เอฟ",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/c7/35/cf/c735cf6c089d50abeee6e48a81df2f11.jpg",
      },
      {
        id: "07",
        cid: "FB-04",
        type: "เฟรชชี่บอย",
        name: "นายจี เฟรชชี่",
        nickName: "จี",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/b4/d7/dc/b4d7dc7fcee41375e778683ed2f67f8f.jpg",
      },
      {
        id: "08",
        cid: "FG-04",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวเอช เฟรชชี่",
        nickName: "เอช",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/93/5a/c3/935ac3ad4b417bde2c559c0060ac1ba8.jpg",
      },
      {
        id: "09",
        cid: "FB-05",
        type: "เฟรชชี่บอย",
        name: "นายไอ เฟรชชี่",
        nickName: "ไอ",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/9e/66/29/9e66293904481240e81491ef17c7a49e.jpg",
      },
      {
        id: "10",
        cid: "FG-05",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวเจ เฟรชชี่",
        nickName: "เจ",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/f8/36/3b/f8363b920ca2b6928175ab7d1d50b25b.jpg",
      },
      {
        id: "11",
        cid: "FB-06",
        type: "เฟรชชี่บอย",
        name: "นายเค เฟรชชี่",
        nickName: "เค",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/00/5f/1a/005f1a53b8fd34262cc5babb94b71913.jpg",
      },
      {
        id: "12",
        cid: "FG-06",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวแอว เฟรชชี่",
        nickName: "แอว",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/c7/35/cf/c735cf6c089d50abeee6e48a81df2f11.jpg",
      },
      {
        id: "13",
        cid: "FB-07",
        type: "เฟรชชี่บอย",
        name: "นายเอ็ม เฟรชชี่",
        nickName: "เอ็ม",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/b4/d7/dc/b4d7dc7fcee41375e778683ed2f67f8f.jpg",
      },
      {
        id: "14",
        cid: "FG-07",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวเอ็น เฟรชชี่",
        nickName: "เอ็น",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/93/5a/c3/935ac3ad4b417bde2c559c0060ac1ba8.jpg",
      },
      {
        id: "15",
        cid: "FB-08",
        type: "เฟรชชี่บอย",
        name: "นายโอ เฟรชชี่",
        nickName: "โอ",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/9e/66/29/9e66293904481240e81491ef17c7a49e.jpg",
      },
      {
        id: "16",
        cid: "FG-08",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวพี เฟรชชี่",
        nickName: "พี",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/f8/36/3b/f8363b920ca2b6928175ab7d1d50b25b.jpg",
      },
      {
        id: "17",
        cid: "FB-09",
        type: "เฟรชชี่บอย",
        name: "นายคิว เฟรชชี่",
        nickName: "คิว",
        age: 18,
        weight: 65,
        height: 172,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/00/5f/1a/005f1a53b8fd34262cc5babb94b71913.jpg",
      },
      {
        id: "18",
        cid: "FG-09",
        type: "เฟรชชี่เกิร์ล",
        name: "นางสาวอาร์ เฟรชชี่",
        nickName: "อาร์",
        age: 18,
        weight: 43,
        height: 165,
        faculty: "วิทยาศาสตร์และเทคโนโลยี",
        branch: "วิทยาการคอมพิวเตอร์",
        talent: "เต้น, ร้องเพลง",
        profile:
          "https://i.pinimg.com/564x/c7/35/cf/c735cf6c089d50abeee6e48a81df2f11.jpg",
      },
    ];
    const contestantsRef = firestore.collection("contestants");
    data.forEach((contestants) => {
      contestantsRef.doc(contestants.id).set({
        id: contestants.id,
        cid: contestants.cid,
        type: contestants.type,
        name: contestants.name,
        nickName: contestants.nickName,
        age: contestants.age,
        weight: contestants.weight,
        height: contestants.height,
        faculty: contestants.faculty,
        branch: contestants.branch,
        talent: contestants.talent,
        profile: contestants.profile,
      });
    });
  },
</script>