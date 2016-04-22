import { combineReducers } from 'redux'
import draggable from './draggable.js'
import undoable, { excludeAction } from 'redux-undo'
import * as actions from 'actions/index.js'

const undoConfig = {
  filter: excludeAction([actions.DRAG, actions.DRAG_START]),
  debug: true
}

export default combineReducers({
  draggable: undoable(draggable, undoConfig)
})
