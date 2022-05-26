<template>
  <div id="send" class="send">
    <div v-wechat-title="$route.meta.title"
      :style="[{ 'background-color': '#0bbae1' }, { 'font-size': '30px' }, { 'height': '50px' }, { 'color': ' #262626' }, { 'z-index': -1 }]">
      <b :style="[{ 'text-align': 'center' }]">OPS BRAIN</b>
    </div>
    <!-- <img height = "250" alt="daren logo" src="../assets/daren.png" /> -->
    <Send msg="Hello World" />
  </div>
</template>

<script>
// @ is an alias to /src
import Send from '@/components/Send.vue'


export default {
  name: 'home',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        this.loading = false
      })
  },
  components: {
    Send
  }
}
</script>

<style lang="scss">
#send {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
