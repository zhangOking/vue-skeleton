import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Skeleton from '../index'
import style from '../style/style.less'
import { RSA_NO_PADDING } from 'constants';

@Component
class StraightLine extends BaseComponent {
    public static componentName: string = 'StraightLine'
    // tslint:disable-next-line:no-shadowed-variable
    public static install = Vue => Vue.component(StraightLine.componentName, StraightLine)
    public name: string = 'StraightLine'
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
            'padding-top': position === 'top' ? 0 : `50%`,
            'box-sizing': 'border-box'
        }
        const styleM = position === 'top' ? 'padding: 15px 0;' : 
            position === 'center' ? `padding: 15px 0; margin-top: -${n + n / 2}px` : `padding: 15px 0;`

        return (
            <div style={styleO}>
                <div style={styleM}>
                    <div class={[active ? style.progActive : style.prog]} style={styleC}></div>
                </div>
            </div>
            
        )
    }
}

export default StraightLine
