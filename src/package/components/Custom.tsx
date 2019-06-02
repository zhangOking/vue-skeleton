import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import Skeleton from '../index'
import style from '../style/style.less'
import List from '../utils'

@Component
class CustomList extends BaseComponent {
    public static componentName: string = 'CustomList'
    // tslint:disable-next-line:no-shadowed-variable
    public static install = Vue => Vue.component(CustomList.componentName, CustomList)
    public name: string = 'CustomList'
    public render(h) {
        const { type, options, title, loading, active, childrenOption } = this.$props
        const { width, height } = options
        let a = childrenOption.slice(0, 9)
        let list = new List()
        let rulesArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,'i']
        rulesArr.forEach(e => list.append(e))

        let _a: Array<any> = []
        a.forEach(e => {
            let propsData = e.componentOptions.propsData;
            let { rules } = propsData
            if (rules) {
                let rArr = typeof rules === 'string' ? rules.split(',') : rules,
                    base = rArr[0]
                rArr.forEach(element => {
                    rulesArr = rulesArr.join(',').replace(new RegExp(element.trim(), 'g'), base).split(',')
                    list.remove(element)
                });
                _a.push({
                    vNode: e,
                    position: base
                })
            } else {
                _a.push({
                    vNode: e,
                    position: null
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
                        <div style={{width: '100%', height: '100%', 'grid-area': e.position}}>{e.vNode}</div>
                    ))
                }
            </div>
        )
    }
}

export default CustomList
