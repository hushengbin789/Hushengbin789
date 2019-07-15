<template>
  <div>
    <div class="classify">
      <ul class="classifyLeft">
        <li v-for="(i,index) in data" :key="index" @click="_shoplist(index)">
          <div>
            <img :src="i.icon_url" alt />
            {{i.name}}
          </div>
        </li>
      </ul>
      <div class="classifyRight">
        <h1 style="font-size: 1.1rem;font-weight: bold;color: #666">{{data[iis].name}}</h1>
        <div class="bigSon" v-for="(j,ind) in data" :key="ind" v-if="data">
          <div class="classifyRightSon" v-for="(s,idx) in food" :key="idx" v-if="data">
            <img :src="s.image_path" alt />
            <div>
              <h1 style="font-weight: bold;font-size: 1rem">{{s.name}}</h1>
              <p
                style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis; width: 10rem"
              >{{s.description}}</p>
              <p>{{s.tips}}</p>
              <h2>
                ￥{{s.activity.fixed_price}}
                <button>+</button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      iis: 0,
      food: []
    };
  },
  methods: {
    _shoplist(index) {
      this.iis = index;
      this.food = this.data[index].foods;
    }
  },
  name: "eleStore-diancan-Bottom"
};
</script>

<style scoped>
.classify {
  width: 100%;
  height: 45rem;
  margin-top: 0.5rem;
  display: flex;
  margin-bottom: 3rem;
}
.classifyLeft {
  width: 22%;
  height: 45rem;
  background: #f8f8f8;
}
.classifyLeft > li {
  width: 100%;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.classifyLeft > li > div {
  width: 80%;
  height: 3.6rem;
  font-size: 0.7rem;
  color: #666;
  line-height: 1rem;
  margin-top: 2rem;
}
.classifyLeft > li > div > img {
  width: 1rem;
  height: 1rem;
}
.classifyLeft > li:hover {
  background: white;
}
.classifyRight {
  width: 78%;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.bigSon {
  width: 100%;
  /*min-height:45rem;*/
  /*overflow: auto;*/
}
.classifyRightSon {
  width: 100%;
  height: 7rem;
  margin-top: 0.5rem;
  display: flex;
}
.classifyRightSon > img {
  width: 35%;
  height: 7rem;
}
.classifyRightSon > div {
  width: 65%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.classifyRightSon > div > p {
  font-size: 0.7rem;
  color: grey;
}
.classifyRightSon > div > h2 {
  width: 100%;
  height: 3rem;
  display: flex;
  color: red;
  font-size: 1rem;
  font-weight: bold;
  justify-content: space-between;
  align-items: flex-end;
}
.classifyRightSon > div > h2 > button {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 60%;
  border: none;
  outline: none;
  color: white;
  background: #0085ff;
  margin-right: 1rem;
}
</style>
