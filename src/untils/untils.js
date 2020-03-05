export function _throttle(fn, interval) {
  let last = 0 
  interval = interval || 200 
  return function(...args) {
    let now = +new Date()
    if ( now - last > interval) {
      last = now
      console.log(args)
      fn.apply(this, args)
    }
  }
}
