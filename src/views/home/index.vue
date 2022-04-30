<template>
  <div class="home">
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
    },
    mixins: [],
    props: {
      msg: {
        type: String,
        default: 'Home'
      }
    },
    data: function () {
      return {
      }
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style lang="scss"scoped>
  .home {}
</style>
