import DefaultLayout from '~/layouts/Default.vue'

import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { IconsPlugin } from 'bootstrap-vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
