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

const audioContext = new AudioContext()

const onUIEvent = event => {
  iuEventNames.forEach(eventName => {
    document.removeEventListener(eventName, onUIEvent, false)
  })
  audioContext.resume()
}

iuEventNames.forEach(eventName => {
  document.addEventListener(eventName, onUIEvent, false)
})
```