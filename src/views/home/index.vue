<template>
  <div class="home">
    <h1>{{ msg }} Page</h1>
    <button @click="get">GET请求</button>
    <br />
    <br />
    <button @click="post">POST请求</button>
    <br />
    <br />
    返回结果：
    <br />
    {{ result }}
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
    return {
      result: '',
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    get() {
      GET_DATA('/main/list').then((res) => {
        this.result = res.list;
      });
    },
    post() {
      POST_DATA('/main/create', { id: 3433 }).then((res) => {
        this.result = res;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
