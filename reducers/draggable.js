import * as actions from '../actions/index.js'

const initialState = {
  dragging: false,
  x: 8,
  y: 50
}

export default function draggable (state = initialState, action) {
  switch (action.type) {
    case actions.DRAG_START:
      return {
        ...state,
        dragging: true
      }
    case actions.DRAG:
      return {
        ...state,
        x: action.x,
        y: action.y
      }
    case actions.DRAG_STOP:
      return {
        ...state,
        dragging: false
      }
    default:
      return state
  }
}
