<template>
  <div class="app">
    <v-header></v-header>
    <ul class="app_nav">
      <li class="app_nav_item" ><router-link to="/goods">商品</router-link></li>
      <li class="app_nav_item"><router-link to="/ratings">评价</router-link></li>
      <li class="app_nav_item"><router-link to="/seller">商家</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "./components/header/header";

  export default {
    components: {
      "v-header": header
    }
  };

</script>

<style rel="stylesheet/scss"  lang="scss">
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
        color:rgb(140,20,20);
        line-height: 40px;
      }
    }
  }

</style>
