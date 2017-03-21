<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "./components/header/header";

  const ERRNO_OK = 0;

  export default {
    data(){
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get("/api/seller").then(response => {
        response = response.body;
        if(response.errno === ERRNO_OK) {
          this.seller = response.data;
        }
      }, response => {
        console.log("seller error");
      });
    },
    components: {
      "v-header": header
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss">
  .app {
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
