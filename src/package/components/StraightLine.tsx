import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Skeleton from '../index'
import style from '../style/style.less'
import { RSA_NO_PADDING } from 'constants';

@Component
class straightline extends BaseComponent {
    public static componentName: string = 'straightline'
    // tslint:disable-next-line:no-shadowed-variable
    public static install = Vue => Vue.component(straightline.componentName, straightline)
    public name: string = 'straightline'
    public render(h) {
        const { type, options, title = false, loading = false, active = false} = this.$props
        const { height='10px', width='100%', position='top' } = options
        let n = +height.split('px')[0] + 30
        const styleC = {
            width,
            height,
            background: '#ebebeb'
        }
        const styleO = {
            width: '100%',
            height: '100%',
            position: 'relative'
        }
        const styleM = {
            width,
            height,
            position: 'absolute',
            padding: '15px 0'
        }
        Object.assign(styleM, {
            bottom: position === 'end' ? `15px` : '',
            top: position === 'top' ? '0' : position === 'center' ? `calc( 50% - ${n / 2}px )` : ``
        })
        return (
            <div style={styleO}>
                <div style={styleM}>
                    <div class={[active ? style.progActive : style.prog]} style={styleC}></div>
                </div>
            </div>
            
        )
    }
}

export default straightline
