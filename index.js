const uiEventNames = [
  // 'mousemove',
  'mousedown',
  'keypress',
  'DOMMouseScroll',
  'mousewheel',
  'touchmove',
  'MSPointerMove',
]

const uiEventListener = callback => {
  const onUIEvent = event => {
    uiEventNames.forEach(eventName => {
      document.removeEventListener(eventName, onUIEvent, false)
    })
    callback(event)
  }
  uiEventNames.forEach(eventName => {
    document.addEventListener(eventName, onUIEvent, false)
  })
}

export {uiEventNames, uiEventListener}