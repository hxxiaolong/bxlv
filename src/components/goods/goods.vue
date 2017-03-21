<template>
  <div class="goods">
    <div class="goodsleft">dd</div>
    <div class="goodsright">ddd</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{};
</script>

<style lang="scss" rel="stylesheet/scss">
  .goods{
    display: flex;
    .goodsleft{
      flex:0 0 80px;
      width: 80px;
      height: 100%;
      background-color: red;
    }
    .goodsright{
      width: 100%;
      height: 100%;
      background-color: blue;
    }
  }
</style>
