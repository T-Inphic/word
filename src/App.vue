<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		popupVisible: false,
  	}
  },
  mounted(){
  },
  methods: {
  	
  }
}
</script>

<style lang="scss">
  html,body{
    height: 100%;
    color: rgba(0,0,0,.87);
  }
  #app{
    height: 100%;
  }
  .borderBottom{
    position: relative;
    &:after{
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 1px;
      background-color: rgba(0,0,0,.12);
    }
  }
  .borderRight{
    position: relative;
    &:after{
      position: absolute;
      right: 0;
      top: 0;
      content: '';
      width: 1px;
      height: 100%;
      background-color: rgba(0,0,0,.12);
    }
  }
</style>
