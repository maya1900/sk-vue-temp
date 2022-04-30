import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const files = require.context('./modules', false, /\.js$/);
const routes = files.keys().map(key => {
  const page = require('./modules' + key.replace('.', ''));
  return page.default;
})
routes.unshift({
  path: '/',
  redirect: '/home'
})
console.log(routes);
const router = new VueRouter({
  routes
})

export default router
