import { createStore } from 'redux'
import reducers from './reducers/index.js'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import * as actions from 'actions/index.js'
import Draggable from './components/Draggable.js'
const store = createStore(reducers)

const draggable = new Draggable(
  document.getElementById('draggable'),
  store.dispatch
)

const undoButton = document.getElementById('undoButton')
undoButton.addEventListener('click', (event) => {
  store.dispatch(UndoActionCreators.undo())
})
const redoButton = document.getElementById('redoButton')
redoButton.addEventListener('click', (event) => {
  store.dispatch(UndoActionCreators.redo())
})

function update() {
  const state = store.getState();
  draggable.update(state.draggable.present);
  undoButton.disabled = (state.draggable.past.length === 0);
  redoButton.disabled = (state.draggable.future.length === 0);
}
store.subscribe(update);
update()
