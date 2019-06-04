import {Vue, Component, Prop} from 'vue-property-decorator'

/**
 * type?: Type,
 * active?: Boolean,
 * loading?: Boolean,
 * title?: Boolean
 */
@Component
class Base extends Vue {
  public static componentName: string = 'skeleton'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Base.componentName, Base)

  @Prop({
    type: [Object, Array],
    default: () => ({})
  })
  public options

  @Prop({
    type: [Object, Array],
    default: () => ({})
  })
  public childrenOption

  @Prop({
    type: String,
    default: 'rect'
  })
  public type

  @Prop({
    type: Boolean,
    default: true
  })
  public active

  @Prop({
    type: Boolean,
    default: true
  })
  public loading

  @Prop({
    type: Boolean,
    default: false
  })
  public title

  @Prop({
    type: [String, Array, Boolean],
    default: false
  })
  public rules

}

export default Base
