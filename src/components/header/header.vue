<template>
    <div class="wrap">
      <transition name="ball">
        <div @click="subme()" class="left" v-show="goods.count>0">
          <div class="left_inner">-</div>
        </div>
      </transition>
      <div class="center" v-show="goods.count>0">{{goods.count}}</div>
      <div class="right" @click="addme()">+</div>
    </div>
</template>

<script type="text/ecmascript-6">


  export default {
    data(){
      return {
        sortid: 0,
        goods: {
          count: 0
        }
      };
    },
    props: {
      seller: {
        type: Object
      }
    },
    methods: {
      addme(){
        this.goods.count++;
        this.$emit("sontellme","woshizi");
      },
      subme(){
        this.goods.count--;
      }
    },
    computed: {
      showadd(){
        if (this.sortid === 0) {
          return "为零";
        } else if (this.sortid === 1) {
          return "为1";
        } else if (this.sortid === 2) {
          return "为2";
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .wrap {
    display: inline-block;
    .left {
      display: inline-block;
      transition: all 0.4s linear;
      .left_inner {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: green;
        text-align: center;
        border-radius: 8px;
        transition: all 0.4s linear;
      }
      &.ball-transition {
        transform: translate3d(0, 0, 0);
        opacity: 1;
        .left_inner {
          transform: rotate3d(0,0,1,0);
        }
      }
      &.ball-enter, &.ball-leave {
        transform: translate3d(24px, 0, 0);
        opacity: 0;
        .left_inner {
          transform: rotate3d(0,0,1,270deg);
        }
      }

    }
    .center {
      display: inline-block;
      width: 24px;
      height: 16px;
      text-align: center;
    }

    .right {
      text-align: center;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: blue;
    }
  }
</style>
