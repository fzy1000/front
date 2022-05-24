<template>
  <!--<sidebar-menu :menu="menu" />-->
        <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="'default-theme'"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
</template>

<script>
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'
  export default {
    name: 'sidebar',
    components: {
        SidebarMenu
    },
    data () {
      return {
        collapsed: false,
        menu: [
          {
              header: true,
              title: 'Main Navigation',
              hiddenOnCollapse: true
          },
          {
              href: '/',
              title: 'Home',
              icon: 'fa fa-user'
          },
          {
              href: '/send',
              title: 'Dashboard',
              icon: 'fa fa-chart-area',
              // child: [
              //     {
              //         href: '/charts/sublink',
              //         title: 'Sub Link'
              //     }
              // ]
          },
          // {
          //   header: true,
          //   title: 'Application',
          //   hiddenOnCollapse: true
          // },
          // {
          //   href: '/disabled',
          //   title: 'Incident Form',
          //   icon: 'fa fa-lock',
          //   disabled: true
          // },
          // {
          //   title: 'Expert Chat',
          //   icon: 'fa fa-cog',
          //   badge: {
          //     text: 'new',
          //     class: 'vsm--badge_default'
          //   }
          // },
          // {
          //   title: 'Schedule an Expert',
          //   icon: 'fa fa-list-alt',
          //   child: [
          //     {
          //       title: 'page'
          //     },
          //     {
          //       title: '打人',
          //       child: [
          //         {
          //           href: '/send',
          //           title: '打谁？'
          //         },
          //         {
          //           href: '/recieve',
          //           title: '接单'
          //         }
          //       ]
          //     },
          //     {
          //       title: 'Page'
          //     },
          //     {
          //       title: 'Another Level 2',
          //       child: [
          //         {
          //           title: 'Level 3',
          //           child: [
          //             {
          //               title: 'Page'
          //             },
          //             {
          //               title: 'Page'
          //             }
          //           ]
          //         }
          //       ]
          //     }
          //   ]
          // }
        ]
      }
    },
    methods: {
      onToggleCollapse (collapsed) {
        // console.log(collapsed)
        this.collapsed = collapsed
        this.$emit('toggle-collapse-default', this.collapsed)
      },
      onItemClick (event, item) {
        console.log('onItemClick')
        // console.log(event)
        // console.log(item)
      }
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  // background-color: #f2f4f7;
  color: #262626;
}

#app {
  padding-left: 350px;
}
#app.collapsed {
  padding-left: 50px;
}

.app {
  padding: 50px;
}

.container {
  max-width: 600px;
}

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  font-size: 13px;
  padding: 5px;
  overflow: auto;
}
</style>
