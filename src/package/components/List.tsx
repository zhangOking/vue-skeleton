import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import style from '../style/style.less'

@Component
class list extends BaseComponent {
  public static componentName: string = 'list'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(list.componentName, list)
  public name: string = 'list'
  public render(h) {
    const {type, options, title, loading, active} = this.$props
    const {row, lineHight, avatar, width} = options
    const arr = Array(row).fill(0)

    const defaultSize = lineHight * row * 1.6
    const sizeMap = {
      large: defaultSize * .8,
      small: defaultSize * .6,
      default: defaultSize
    }
    const flexDirectionMap = {
      left: 'row',
      right: 'row-reverse',
      top: 'column',
      bottom: 'column-reverse'
    }
    let containerStyle = {
      width: width ? width + 'px' : 'auto'
    }
    let avatarStyle = {}
    let listStyle = {}
    if ( avatar ) {
      const {position, size, shape} = avatar
      containerStyle = Object.assign(containerStyle, {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: flexDirectionMap[position]
      })
      listStyle = {
        flex: '1',
        marginLeft: position === 'left' ? '20px' : 0,
        marginRight : position === 'right' ? '20px' : 0
      }
      avatarStyle = {
        width: sizeMap[size] + 'px',
        height: sizeMap[size] + 'px',
        borderRadius: shape === 'CircleCom' ? '50%' : '0',
        overflow: 'hidden'
      }
    }
    return (
      <div style={containerStyle}>
        {
          avatar && <div class={[active ? style.progActive : style.prog ]} style={avatarStyle}></div>
        }
        <ul style={listStyle}>
          {
            arr.map((item, index) => (
              <li
                key={index}
                class={[active ? style.progActive : style.prog ]}
                style={{
                  height: lineHight + 'px',
                  marginBottom: lineHight * 0.6 + 'px',
                  width: index === arr.length - 1 ? '60%' : '100%'
                }}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default list
