# UI Events

A collection of user interactions required for initiating media reproduction.

## Installation

`npm i dimitriaatos/uievents`

## Use

#### uiEventListener function
```javascript
import {uiEventListener} from 'uievents'

const audioContext = new AudioContext()

uiEventListener(audioContext.resume)
```

#### iuEventNames array
```javascript
import {iuEventNames} from 'uievents'

let waitToHide

const hideCursor = () => {
  document.body.style.cursor = 'auto'
  clearTimeout(waitToHide)
  waitToHide = setTimeout(
    () => {
      document.body.style.cursor = 'none'
    },
    2000
  )
}

uiEventNames.forEach(event => {
  document.addEventListener(event, hideCursor, false)
}) 
```