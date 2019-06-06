这是一款通用的vue骨架屏插件
git地址： [https://github.com/zhangOking/vue-skeleton](https://github.com/zhangOking/vue-skeleton)

# 使用方法
```
npm install vue-skeleton-component --save-dev

// main.js
import skeleton from 'vue-skeleton-component'
Vue.use(skeleton)
```
# 骨架屏样式
初期版本只提供几个简单的样式可以选择，后续会慢慢补充

#### 1. 分割线
以给定的容器大小为基准画一条线
![分割线](https://upload-images.jianshu.io/upload_images/3378249-81acfca80f76007a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
<skeleton active type='straightLine' :options="{
    height: '20px',
    position: 'center'
}" />
```
API | 内容 | 类型 | 值
--- | --- | --- | ---
type | 显示类型 | String | 组件类型
active | 是否显示动效 | Boolean | true/false
options | 设置项 | Object | null
-width | 线的长度 | String | 100%
-height | 线的宽度 | String | 100%
-position | 线的位置 | String | ['top', 'center', 'end']

#### 2. 圆
画一个圆, 需要给出圆的直径，否则在一个长方形容器中将表现为椭圆形
![圆](https://upload-images.jianshu.io/upload_images/3378249-4dad3ffecf556cf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
<skeleton  type='circlecom' active :options="{
    width: '150px'
}" />
```
API | 内容 | 类型 | 值
--- | --- | --- | ---
type | 显示类型 | String | 组件类型
active | 是否显示动效 | Boolean | true/false
options | 设置项 | Object | null
-width | 圆的直径 | String | 100%，如果不传，将会自动使用100%

#### 3. 卡片
画一个方块，需要给定宽和高，否则将会默认自动填充容器
![卡片](https://upload-images.jianshu.io/upload_images/3378249-07ea8c025653e878.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<skeleton type='card' active :options="{
    width: '200px',
    height: '150px'
}" />
```
API | 内容 | 类型 | 值
--- | --- | --- | ---
type | 显示类型 | String | 组件类型
active | 是否显示动效 | Boolean | true/false
options | 设置项 | Object | null
-width | 线的长度 | String | 100%
-height | 线的宽度 | String | 100%
#### 4. 列表
创建一个文字行效果，需要给出文字行数和行高
![列表](https://upload-images.jianshu.io/upload_images/3378249-9f7d824526383f03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<skeleton type='listcom' active :options="{
    row: 3,
    lineHight: 20
}" />
```
API | 内容 | 类型 | 值
--- | --- | --- | ---
type | 显示类型 | String | 组件类型
active | 是否显示动效 | Boolean | true/false
options | 设置项 | Object | null
-width | 列表的宽度 | String | 100%
-height | 列表单行的高度 | String | 20px
-position | 列表的位置 | String | ['top', 'center', 'end']上中下
-row | 列表行数 | Number | 3
-lineHight | 行间距 | Number | 20
#### 5. 混合类型
混合类型可以使用以上几种类型的全部api，将其整合到一起，相互拼接
![混合类型](https://upload-images.jianshu.io/upload_images/3378249-cf379de9a0c0427d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

混合类型使用了九宫格布局来作为基础布局(grid布局)，将你想插入的组件按照[a ~ i]的顺序进行排列，你可以选择你想让哪些组件出现在哪一个位置，简单配置，就可以达到想要的效果，如下图
![九宫格布局](https://upload-images.jianshu.io/upload_images/3378249-caef0653ad4ff2e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
<skeleton type="custom" :options="{ width: '100%', height: '100%' }" :childrenOption="[
    {type: 'circlecom', rules: 'a, d', active: true, options:{width: '150px'} },
    {type: 'listcom', rules: 'b, c, e, f', active: true},
    {type: 'straightLine', active: true, rules: 'g, h, i'},
]" />
```
API | 内容 | 类型 | 值
--- | --- | --- | ---
type | 显示类型 | String | 组件类型
active | 是否显示动效 | Boolean | true/false
options | 设置项 | Object | null
-rules | 出现规则，这里不可以跨行切必须相邻 | String | 'a, b, ... i'
-childrenOption | 设置子组件类型 | Array[Object] | []

