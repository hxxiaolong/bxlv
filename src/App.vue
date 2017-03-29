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
    <router-view></router-view>
    <button @click="clicktest">click me change loginin is {{loginStatus}}</button>
    <div>{{loginStatus}}</div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "./components/header/header";
  import footer from "./components/footer/footer";
  import api from "../fetch/api";
  import { mapGetters } from "vuex";

  const ERRNO_OK = 0;
  const urlSetting = {
    "base": "/healthstore"
  };

  export default {
    data(){
      return {
        seller: {},
        shouye: [],
        douban: {}
      };
    },
    created() {
      api.getSeller()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log("err");
        });
    },
    components: {
      "v-header": header,
      "v-footer": footer
    },
    methods: {
      sontellme(name) {
        console.log(name);
      },
      clicktest(){
       this.$store.dispatch("setLoginStatus",false);
      }
    },
    computed: {
      ...mapGetters([
        "loginStatus"
      ])
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss">
  .app {
    .move {
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
