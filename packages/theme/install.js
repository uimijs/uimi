import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const px2rem = (
  code,
  options = {
    to: 'px',
    base: 16,
  }
) => {
  let from, to, ratio
  if (options.to == 'px') {
    from = 'rem'
    to = 'px'
    ratio = options.base
  } else {
    from = 'px'
    to = 'rem'
    ratio = 1 / options.base
  }
  const reg = new RegExp(`(\\d*\\.?\\d+)${from}`, 'gi')

  return code.replace(reg, (str, num) => {
    return num * ratio + to
  })
}
const btPath = path.resolve(`node_modules/bootstrap/scss/_variables.scss`)

let template = readFileSync(btPath, 'utf-8')
template = px2rem(template, { to: 'px', base: 16 })
writeFileSync(btPath, template)
