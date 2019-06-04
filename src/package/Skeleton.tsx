import { Component } from 'vue-property-decorator'
import BaseComponent from './BaseComponent'
import Rectangular from './components/Rect'
import List from './components/List'
import Avatar from './components/Avatar'
import CustomList from './components/Custom'
import StraightLine from './components/StraightLine'
import CircleCom from './components/Circle'
import CardCom from './components/Card'
import ListCom from './components/ListCom'
import style from './style/style.less'


/**
 * type?: Type,
 * active?: Boolean,
 * loading?: Boolean,
 * title?: Boolean
 */
@Component
class skeleton extends BaseComponent {
  public static componentName: string = 'skeleton'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(skeleton.componentName, skeleton)

  public render(h) {
    const { type, options, title, loading, active, childrenOption, start, center, end, rules } = this.$props
    return (
      <div class={style.contianer}>
        {
          loading ?
          <div style={{height: '100%'}}>
            {
              title && <div class={[active ? style.progActive : style.prog, style.title]} />
            }
            {
              type === 'rect' && <Rectangular
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
              type === 'list' && <List
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
              type === 'avatar' && <Avatar
                title={title}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
                type === 'custom' && <CustomList
                title={title}
                loading={loading}
                active={active}
                options={options}
                childrenOption={childrenOption}
              />
            }
            {
                type === 'straightLine' && <StraightLine
                title={title}
                rules={rules}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
                type === 'circlecom' && <CircleCom
                title={title}
                rules={rules}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
                type === 'card' && <CardCom
                title={title}
                rules={rules}
                loading={loading}
                active={active}
                options={options}
              />
            }
            {
                type === 'listcom' && <ListCom
                title={title}
                rules={rules}
                loading={loading}
                active={active}
                options={options}
              />
            }
            </div> : this.$slots.default
    }
      </div>
    )
  }
}

export default skeleton
