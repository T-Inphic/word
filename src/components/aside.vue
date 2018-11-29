<template>
  <ul>
    <li v-for="(item,index) in list" :key="index">
      <div class="item node">{{item.name}}</div>
      <ul v-if="item.childMenu.length>0">
        <li v-for="(citem,cindex) in item.childMenu" :key="cindex">
          <div class="item">{{citem.name}}</div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Aside',
  props: {
    list: {
      type: Array,
      default: [],
    }
  },
  data () {
    return {
      data: '',
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
li{
  height: 36px;
  .node{
    line-height: 36px;
  }
  .item{
    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  }
  user-select: none;
}
</style>
