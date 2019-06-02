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
                options中的positionp[top, center, end]分别确定了线的上中下位置
                <Skeleton
                  active
                  type='straightLine'
                  options={{
                    height: '20px',
                    position: 'center'
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <div class={appStyle.description}>圆</div>
            <div class={appStyle.skeleton}>
              <Skeleton
                type='circle'
                active
                options={{
                  width: '150px'
                }}
              />
            </div>
            <pre>
              {`
                需要给出一个直径
                
                <Skeleton
                  type='circle'
                  active
                  start
                  options={{
                    width: '150px'
                  }}
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

                <Skeleton
                  type='card'
                  active
                  center
                  options={{
                    width: '100px',
                    height: '60px'
                  }}
                />
              `}
            </pre>
          </div>
          <div class={appStyle.boxList}>
            <div class={appStyle.description}>列表</div>
            <div class={appStyle.skeleton}>
              <Skeleton
                type='listCom'
                active
                options={{
                  row: 3,
                  lineHight: 20,
                  width: 500,
                  options: {
                    lineHight: '20',
                    height: '20px',
                    row: '4'
                  }
                }}
              />
            </div>
            <pre>
              {`
              列表自动填满元素，给出行高和lineHight
              
                <Skeleton
                  type='listCom'
                  active
                  options={{
                    row: 3,
                    lineHight: 20,
                    options: {
                      lineHight: '20',
                      height: '20px',
                      row: '4'
                    }
                  }}
                />
              `}
            </pre>
          </div>




          {/* <div class={appStyle.boxList}>
            <Skeleton
              active={false}
              title={true}
              type='rect'
              options={{
                width: '300px',
                height: '200px'
              }}
            />
            <pre>
              {`
              <Skeleton
                active={false}
                title={true}
                type='rect'
                options={{
                  width: '300px',
                  height: '200px'
                }}
              />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='rect'
              options={{
                width: '300px',
                height: '200px'
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='rect'
                  options={{
                    width: '300px',
                    height: '200px'
                  }}
                />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='list'
              options={{
                row: 3,
                lineHight: 20,
                width: 500,
                avatar: {
                  position: 'left',
                  size: 'large',
                  shape: 'circle'
                }
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='list'
                  options={{
                    row: 3,
                    lineHight: 20,
                    width: 500,
                    avatar: {
                      position: 'left',
                      size: 'large',
                      shape: 'circle'
                    }
                  }}
                />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              title={true}
              type='list'
              options={{
                row: 2,
                lineHight: 20,
                width: 500,
                avatar: {
                  position: 'right',
                  size: 'default',
                  shape: 'square'
                }
              }}
            />
            <pre>
              {`
                <Skeleton
                  title={true}
                  type='list'
                  options={{
                    row: 2,
                    lineHight: 20,
                    width: 500,
                    avatar: {
                      position: 'right',
                      size: 'default',
                      shape: 'square'
                    }
                  }}
                />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='list'
              options={{
                width: 500,
                row: 4,
                lineHight: 20
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='list'
                  options={{
                    width: 500,
                    row: 4,
                    lineHight: 20
                  }}
                />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'left',
                size: 'default',
                shape: 'circle'
              }}
            />
            <pre>
              {`
                <Skeleton
                  type='avatar'
                  options={{
                    position: 'left',
                    size: 'default',
                    shape: 'circle'
                  }}
                />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'right',
                size: 'large',
                shape: 'circle'
              }}
            />
            <pre>
              {`
            <Skeleton
              type='avatar'
              options={{
                position: 'right',
                size: 'large',
                shape: 'circle'
              }}
            />
            `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'top',
                size: 'small',
                shape: 'circle'
              }}
            />
            <pre>
              {`
            <Skeleton
              type='avatar'
              options={{
                position: 'top',
                size: 'small',
                shape: 'circle'
              }}
            />
            `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='avatar'
              options={{
                position: 'bottom',
                size: 'default',
                shape: 'square'
              }}
            />
            <pre>
              {`
              <Skeleton
                type='avatar'
                options={{
                  position: 'bottom',
                  size: 'default',
                  shape: 'square'
                }}
              />
              `}
            </pre>
          </div> */}
          {/* <div class={appStyle.boxList}>
            <Skeleton
              type='article'
              loading={false}
            > <div>aaa</div>loading的占位符 </Skeleton>
            <pre>
              {`
                <Skeleton
                  type='article'
                  loading={false}
                >
                  <div>aaa</div>
                  loading的占位符
                </Skeleton>
              `}
            </pre>
          </div> */}







          
          {/* <div class={appStyle.boxList}>
            <Skeleton type="custom"  options={{ width: '800px', height: '500px' }}
              childrenOption={[
                <Skeleton type='circle' rules='a, d' active />,
                <Skeleton type='listCom' rules={'b, c, e, f'} active />,
                <Skeleton type='straightLine' active rules={'g, h, i'}/>,
              ]}
            />
            <pre>
              {`
                <Skeleton type="custom"  options={{ width: '800px', height: '500px' }}
                  childrenOption={[
                    <Skeleton type='circle' rules='a, d' active />,
                    <Skeleton type='listCom' rules={'b, c, e, f'} active />,
                    <Skeleton type='straightLine' active rules={'g, h, i'}/>,
                  ]}
                />
              `}
            </pre>
          </div>  */}
        </h2>
      </div>
    )
  }
}
export default Home
