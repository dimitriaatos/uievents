const uiEventNames = [
  'mousemove',
  'mousedown',
  'keypress',
  'DOMMouseScroll',
  'mousewheel',
  'touchmove',
  'MSPointerMove',
]

const uiEventListener = callback => {
  const onUIEvent = event => {
    iuEventNames.forEach(eventName => {
      document.removeEventListener(eventName, onUIEvent, false)
    })
    callback(event)
  }
  iuEventNames.forEach(eventName => {
    document.addEventListener(eventName, onUIEvent, false)
  })
}

export default {uiEventNames, uiEventListener}