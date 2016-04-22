import * as actions from 'actions/index.js'
import { bindActionCreators } from 'redux'
import 'pepjs'

export default class Draggable {
  constructor (elem, store) {
    console.log('Draggable');
    this.elem = elem
    this.actions = bindActionCreators(actions, store.dispatch)
    this.update(store.getState())
    store.subscribe(() => {
      this.update(store.getState())
    })

    let dragging = false
    this.elem.addEventListener('pointerdown', (event) => {
      dragging = true
      this.actions.dragStart()
    })
    document.addEventListener('pointermove', (event) => {
      if (dragging) {
        this.actions.drag(event.clientX - 50, event.clientY - 50)
      }
    })
    document.addEventListener('pointerup', (event) => {
      if (dragging) {
        dragging = false
        this.actions.dragStop()
      }
    })
  }
  update (state) {
    const {x, y, dragging} = state.draggable.present
    this.elem.style.left = `${x}px`
    this.elem.style.top = `${y}px`
    this.elem.className = dragging ? 'dragging' : '';
  }
}
