export function throttle(fn, delay = 500) {
  let timer = null
  let preTime = Date.now()

  return function (...args) {
    clearTimeout(timer)
    let curTime = Date.now()
    let remainTime = delay - (curTime - preTime)
    if (remainTime <= 0) {
      fn.apply(this, args)
      preTime = Date.now()
    } else {
      timer = setTimeout(() => fn.apply(this, args), remainTime)
    }
  }
}
