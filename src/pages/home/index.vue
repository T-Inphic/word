<template>
  <div class="home">
    <ww-header />
    <div class="contBody">
      <div class="left borderRight">
        <div class="asidBox">
          <ww-aside :list="menuList"/>
        </div>
      </div>
      <div class="right">
        
      </div>
    </div>
  </div>
</template>

<script>
import wwAside from '@/components/aside'
import wwHeader from '@/pages/header'
export default {
  name: 'Home',
  data () {
    return {
      menuList: [{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      },{
        name: 'css简单随记',
        open: true,
        childMenu:[{
          name: '一堆',
          routerUrl: '',
        }]
      }],
    }
  },
  components: {
    wwHeader,
    wwAside
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  height: 100%;
}
.contBody{
  display: flex;
  height: calc(100% - 64px);
  .left{
    width: 255px;
    overflow: hidden;
    cursor: default;
    .asidBox{
      height: 100%;
      overflow-y: auto;
      //隐藏滚动条
      &::-webkit-scrollbar {
          display: none;
      }
    }
    
     /*滚动条样式*/
    // &::-webkit-scrollbar {/*滚动条整体样式*/
    //     width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    //     height: 4px;
    // }
    // &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    //     border-radius: 5px;
    //     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    //     background: rgba(0,0,0,0.2);
    // }
    // &::-webkit-scrollbar-track {/*滚动条里面轨道*/
    //     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    //     border-radius: 0;
    //     background: rgba(0,0,0,0.1);
    // }
  }
  .right{
    flex: 1;
  }
}
</style>
