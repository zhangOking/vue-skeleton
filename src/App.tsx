import { Vue, Component } from 'vue-property-decorator'
import Skeleton from './package'
import appStyle from './app.less'

@Component
class Home extends Vue {
  public name: string = '通用化骨架屏'
  public render(h) {
    return (
      <div> 
        <h2>
          {this.name}
          <div class={appStyle.boxList}>
            <div class={appStyle.description}>线</div>
            <div class={appStyle.skeleton}>
              <Skeleton
                active
                type='straightLine'
                options={{
                  height: '20px',
                  position: 'center'
                }}
              />
            </div>
            <pre>
              {`
                可以设置高
                options中的position[top, center, end]分别确定了线的上中下位置

                <skeleton
                  active
                  type='straightLine'
                  :options="{
                    height: '20px',
                    position: 'center'
                  }"
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <div class={appStyle.description}>圆</div>
            <div class={appStyle.skeleton}>
              <Skeleton
                type='circlecom'
                active
                options={{
                    width: '150px'
                }}
              />
            </div>
            <pre>
              {`
                需要给出一个直径
                
                <skeleton
                  type='circlecom'
                  active
                  :options="{
                      width: '150px'
                  }"
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <div class={appStyle.description}>卡片</div>
            <div class={appStyle.skeleton}>
              <Skeleton
                type='card'
                active
                options={{
                  width: '200px',
                  height: '150px'
                }}
              />
            </div>
            <pre>
              {`
              可以设置宽高，不设置将会默认填充满

                <skeleton
                  type='card'
                  active
                  :options="{
                    width: '200px',
                    height: '150px'
                  }"
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <div class={appStyle.description}>列表</div>
            <div class={appStyle.skeleton}>
              <Skeleton
                type='listcom'
                active
                options={{
                  row: 4,
                  lineHight: 20,
                  width: '100%',
                  position: 'end'
                }}
              />
            </div>
            <pre>
              {`
              列表自动填满元素，给出行高和lineHight
              
                <skeleton
                  type='listcom'
                  active
                  :options="{
                    row: 3,
                    lineHight: 20,
                    width: 100px,
                  }"
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <Skeleton type="custom" options={{ width: '800px', height: '500px' }}
              childrenOption={[
                {type: 'circlecom', rules: 'a, d', active: true, options:{width: '150px'}},
                {type: 'listcom', rules: 'b, c, e, f', active: true},
                {type: 'straightLine', active: true, rules: 'g, h, i'},
              ]}
            />
            <pre>
              {`
                九宫格布局

                <skeleton type="custom" :options="{ width: '100%', height: '100%' }"
                  :childrenOption="[
                    {type: 'circlecom', rules: 'a, d', active: true },
                    {type: 'listcom', rules: 'b, c, e, f', active: true},
                    {type: 'straightLine', active: true, rules: 'g, h, i'},
                  ]"
                />
              `}
            </pre>
          </div> 
        </h2>
      </div>
    )
  }
}
export default Home
