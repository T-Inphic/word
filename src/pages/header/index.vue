<template>
  <div class="header">
    <div class="left borderBottom">
      <i class="iconfont ww-editor"></i> <span>手记</span>
    </div>
    <div class="right">
        <div class="top">
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>


<style lang="scss" scoped>
  .header{
    display: flex;
    height: 64px;
    .left,.right{
      font-size: 16px;
    }
    .left{
      width: 255px;
      height: 64px;
      line-height: 64px;
      padding-left: 16px;
      background-color: #fff;
      .ww-editor{
        font-size: 18px;
        color: rgba(0,0,0,.54)
      }
      span{
        color: rgba(0,0,0,.54);
        font-weight: 500;
      }
    }
    .right{
      flex: 1;
      height: 64px;
      background-color: #2196f3;
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
      .top{
        background-color: #fff;
      }
    }
  }
</style>
