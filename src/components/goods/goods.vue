<template>
  <div class="goods">
    <div class="goodsleft">
      <div class="goods_item onepxbottom">ddd1</div>
      <div class="goods_item">ddd2</div>
      <div class="goods_item">ddd3</div>
    </div>
    <div class="goodsright">ddd</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{};
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/style/util";

  .goods{
    display: flex;
    .goodsleft{
      flex:0 0 80px;
      height: 280px;
      width: 80px;
      background-color: red;
      display: flex;
      flex-direction: column;
      .goods_item{
        position: relative;
        text-align: center;
        height: 20px;
        line-height: 20px;
      }
      .onepxbottom:after{
        border-bottom: 1px solid blue;
      }
    }
    .goodsright{
      width: 100%;
      height: 100%;
      background-color: blue;
    }
  }
</style>
