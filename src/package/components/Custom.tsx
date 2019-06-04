import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import Skeleton from '../index'
import style from '../style/style.less'
import List from '../utils'

@Component
class customlist extends BaseComponent {
    public static componentName: string = 'customlist'
    // tslint:disable-next-line:no-shadowed-variable
    public static install = Vue => Vue.component(customlist.componentName, customlist)
    public name: string = 'customlist'
    public render(h) {
        const { type, options, title, loading, active, childrenOption } = this.$props
        const { width, height } = options
        let a = childrenOption.slice(0, 9)
        let list = new List()
        let rulesArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,'i']
        rulesArr.forEach(e => list.append(e))

        let _a: Array<any> = []
        a.forEach(e => {
            // let propsData = e.componentOptions.propsData;
            if (e.rules) {
                let rArr = typeof e.rules === 'string' ? e.rules.split(',') : e.rules,
                    base = rArr[0]
                rArr.forEach(element => {
                    rulesArr = rulesArr.join(',').replace(new RegExp(element.trim(), 'g'), base).split(',')
                    list.remove(element)
                });
                _a.push({
                    position: base,
                    ...e
                })
            } else {
                _a.push({
                    position: null,
                    ...e
                })
                list.next()
            }
        });

        const tmpstring = `height: ${height};
                           width: ${width};
                           overflow: hidden;
                           grid-template-rows: repeat(3, 33.3%);
                           grid-template-columns: repeat(3, 33.3%);
                           grid-template-areas: "${rulesArr.slice(0, 3).join(',').replace(/\,/gi, ' ')}" "${rulesArr.slice(3, 6).join(',').replace(/\,/gi, ' ')}" "${rulesArr.slice(6, 9).join(',').replace(/\,/gi, ' ')}"`
        return (
            <div style={tmpstring} class={[style.customList]}>
                {
                    _a.map(e => (
                        <div style={{width: '100%', height: '100%', 'grid-area': e.position}}>
                            <Skeleton type={e.type} active={e.active} options={e.options || {}} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default customlist
