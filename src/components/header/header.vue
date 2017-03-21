<template>
  <div>
    {{seller.name}}
    <button @click="addme">click me</button>
    <input type="number" :sortida="sortid">
    <div>{{sortid}}</div>
    <div>{{showadd}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data(){
      return {
        sortid: 0
      };
    },
    props: {
      seller: {
        type: Object
      }
    },
    methods: {
      addme(){
        this.sortid++;
      }
    },
    computed: {
      showadd(){
       if(this.sortid ===0){
           return "为零";
       }else if(this.sortid ===1){
         return "为1";
       }else if(this.sortid ===2){
         return "为2";
       }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
