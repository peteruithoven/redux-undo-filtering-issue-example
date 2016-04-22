import { createStore } from 'redux'
import reducers from './reducers/index.js'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import * as actions from 'actions/index.js'
import Draggable from './components/Draggable.js'
const store = createStore(reducers)

const draggable = new Draggable(
  document.getElementById('draggable'),
  store
)

const undoButton = document.getElementById('undoButton')
undoButton.addEventListener('click', (event) => {
  store.dispatch(UndoActionCreators.undo())
})

// slight hack to store initial location
store.dispatch(actions.dragStop());
