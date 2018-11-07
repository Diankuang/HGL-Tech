// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueUEditor from 'vue-ueditor'

Vue.config.productionTip = false
Vue.use(ElementUI, VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(VueUEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.sessionStorage.user !== null && window.sessionStorage.user !== '') {
      next()
    } else if (to.path !== '/') {
      next({path: '/login'})
      Vue.prototype.$message.warning('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
})
