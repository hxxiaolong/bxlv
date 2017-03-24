<template>
  <div class="app">
    <div class="move">
      <v-header :seller="seller" @sontellme="sontellme" ref="vheader"></v-header>
    </div>
    <ul class="app_nav">
      <li class="app_nav_item">
        <router-link to="/goods">商品</router-link>
      </li>
      <li class="app_nav_item">
        <router-link to="/ratings">评价</router-link>
      </li>
      <li class="app_nav_item">
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
    <!--<div>{{shouye[0].name}}</div>-->
    <router-view></router-view>
      <button @click="clicktest">click me test ref</button>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "./components/header/header";
  import footer from "./components/footer/footer";

  const ERRNO_OK = 0;
  const urlSetting = {
      "base":"/healthstore"
  };

  export default {
    data(){
      return {
        seller: {},
        shouye:[],
        douban:{}
      };
    },
    created() {
      console.log(this.$store.state.header.headerValue);
      this.$store.commit("getHeaderValue");
      console.log(this.$store.state.header.headerValue);
      this.$http.get("/api/seller").then(response => {
        response = response.body;
        if(response.errno === ERRNO_OK) {
          this.seller = response.data;
        }
      }, response => {
        console.log("seller error");
      });

      this.$http.get(urlSetting.base+"/shop/firstSorts").then(response => {
          this.shouye = response.body;
//          console.log(this.shouye);
      }, response => {
        console.log("shouye error");
      });
    },
    components: {
      "v-header": header,
      "v-footer":footer
    },
    methods:{
      sontellme(name) {
        console.log(name);
      },
      clicktest(){
          let vheader = this.$refs.vheader;
          console.log(vheader.sortid);
      }
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss">
  .app {
    .move{
      position: absolute;
      right: 50vw;
    }
    .app_nav {
      width: 100%;
      display: flex;
      background-color: blue;
      .app_nav_item {
        background-color: red;
        width: 33.333%;
        height: 40px;
        text-align: center;
        font-size: 14px;
        color: rgb(140, 20, 20);
        line-height: 40px;
      }
    }
  }

</style>
