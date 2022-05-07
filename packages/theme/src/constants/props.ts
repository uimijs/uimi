import type { PropType } from 'vue'
export const rounded = {
  type: String as PropType<'sm' | 'lg' | 'top' | 'right' | 'bottom' | 'left' | 'circle' | 'pill' | '0'>,
  validator(this: never, val: string) {
    return ['sm', 'lg', 'top', 'right', 'bottom', 'left', 'circle', 'pill', '0'].includes(val)
  },
} //圆角样式
export const theme = {
  type: String as PropType<
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'default'
    | 'close'
    | 'link'
  >,
  validator(this: never, val: string) {
    return [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
      'default',
      'close',
      'link',
    ].includes(val)
  },
} //主题颜色
