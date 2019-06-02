import {Vue, Component, Prop} from 'vue-property-decorator'
import style from '../style/style.less'

@Component
class Skeleton extends Vue {
  public static componentName: string = 'Article'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(Skeleton.componentName, Skeleton)
  public name: string = 'Article'
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log('Article')
  }
  public render(h) {
    return (
      <div>
        <h1>Article</h1>
      </div>
    )
  }
}

export default Skeleton
