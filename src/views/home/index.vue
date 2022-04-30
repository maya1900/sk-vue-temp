<template>
  <div class="home">
    <h1>{{ msg }} Page</h1>
    <button @click="get">GET请求</button>
    <br />
    <br />
    <button @click="post">POST请求</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Home',
    },
  },
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    get() {
      GET_DATA('/main/list').then((res) => {
        alert('返回结果：' + res.data);
      });
    },
    post() {
      POST_DATA('/main/create', { id: 3433 }).then((res) => {
        alert('返回结果：' + res.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
