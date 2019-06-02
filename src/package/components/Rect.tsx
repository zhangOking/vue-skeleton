import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import style from '../style/style.less'

@Component
class Rectangular extends BaseComponent {
  public static componentName: string = 'Rectangular'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Rectangular.componentName, Rectangular)
  public name: string = 'Rectangular'
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

export default Rectangular
