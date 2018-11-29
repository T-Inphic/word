<template>
  <button class="btn">{{text}}</button>
</template>

<script>

export default {
  name: 'wwButton',
  props: {
    text: {
      type: String,
      default: '按钮'
    },
    router: {
      type: String,
      default: ''
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
.btn{

}
</style>
