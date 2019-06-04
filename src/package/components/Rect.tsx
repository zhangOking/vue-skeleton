import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import style from '../style/style.less'

@Component
class rectangular extends BaseComponent {
  public static componentName: string = 'rectangular'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(rectangular.componentName, rectangular)
  public name: string = 'rectangular'
  public render(h) {
    const {type, options, title, loading, active} = this.$props
    const {width, height} = options
    const styleC = {
      width,
      height,
      background: '#f2f2f2'
    }
    return (
      <div class={active ? style.progActive : style.prog} style={styleC}>
      </div>
    )
  }
}

export default rectangular
