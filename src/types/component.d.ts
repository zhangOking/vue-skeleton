import Vue from 'vue'
import { type } from 'os';

type Type = 
  'rect' |
  'list' |
  'avatar' |
  'custom' | 
  'straightLine' |
  'circlecom' | 
  'card' |
  'listcom'

type Size =
  'large' |
  'small' |
  'default'

type Position =
  'left' |
  'right' |
  'top' |
  'bottom'

type Shape =
  'circlecom' |
  'square'
/* 矩形骨架屏配置项 */
interface RectOptions {
  width: string,
  height: string,
  size?: Size
}

/* 头像骨架屏 */
interface AvatarOptions {
  position: Position,
  size?: Size,
  shape: Shape
}

/* 列表骨架屏 */
interface ListOptions {
  size?: Size,
  row: number,
  lineHight: number,
  width?: number,
  avatar: AvatarOptions | null
}

/* 文章骨架屏 */
interface ArticleOptions {
  size?: Size,
  lineHight: number,
  width?: number,
  row: number
}

/* 线骨架屏 */
interface LineOptions {
  size?: Size,
  height: string,
  width?
}

interface CircleOptions {
  size?: Size,
  height?,
  width?
}

type optionsType = 
  RectOptions | 
  ListOptions | 
  AvatarOptions | 
  ArticleOptions |
  LineOptions |
  CircleOptions

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    type?: Type,
    active?: Boolean,
    loading?: Boolean,
    title?: Boolean,
    style?: Object,
    options?: optionsType,
    rules?,
    childrenOption?
  }
}
declare var require: any