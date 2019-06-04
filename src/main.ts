import skeleton, { avatar, list, custom, straightline, card, circlecom, listcom } from './package/index';

const components = [
  skeleton,
  avatar,
  card,
  list,
  custom,
  circlecom,
  listcom,
  straightline
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.componentName, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  skeleton,
}
