import {Vue, Component, Prop} from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import style from '../style/style.less'

@Component
class Avatar extends BaseComponent {
  public static componentName: string = 'Avatar'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Avatar.componentName, Avatar)
  public name: string = 'Avatar'
  public render(h) {
    const defaultSize = 40
    const sizeMap = {
      large: defaultSize * 1.5,
      small: defaultSize * .7,
      default: defaultSize
    }
    const flexDirectionMap = {
      left: 'row',
      right: 'row-reverse',
      top: 'column',
      bottom: 'column-reverse'
    }
    const {options, title, loading, active} = this.$props
    const {position, size, shape} = options
    const styleA = {
      display: 'inline-flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: (position === 'left' || position === 'right') ? sizeMap[size] * 3 + 'px' : 'auto',
      height: (position === 'top' || position === 'bottom') ? sizeMap[size] * 2 + 'px' : 'auto',
      flexDirection: flexDirectionMap[position]
    }
    const styleC = {
      width: sizeMap[size] + 'px',
      height: sizeMap[size] + 'px',
      borderRadius: shape === 'circle' ? '50%' : '0',
      overflow: 'hidden'
    }
    const styleN = {
      width: sizeMap[size] * 1.5 + 'px',
      height: sizeMap[size] * .5 + 'px',
    }
    return (
      <div style={styleA}>
        <div class={active ? style.progActive : style.prog} style={styleC}>
        </div>
        <div class={active ? style.progActive : style.prog} style={styleN}></div>
      </div>
    )
  }
}

export default Avatar
