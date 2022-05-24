<template>
   <div id="app1"  :class="[{'collapsed' : isCollapsed}]">
    <!--<sidebar-menu :menu="menu" />-->
    <Sidebar
      @toggle-collapse-default="onToggleCollapse"
    />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
 <!--<router-view></router-view>-->
</template>

<script lang="ts">
  import Sidebar from '../views/Sidebar.vue'
  export default {
    name: 'DefaultContainer',
    components: {
      Sidebar
    },
    data () {
      return {
        isCollapsed: false
      }
    },
    methods: {
      // onToggleCollapse (collapsed:Boolean) {
        // (this as any).isCollapsed = collapsed
      // }
    }
  }
</script>

<style lang="scss">
  #nav {
    // padding: 30px;
    text-align: center;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
