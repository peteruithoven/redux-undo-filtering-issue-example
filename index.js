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

function update() {
  const state = store.getState();
  draggable.update(state.draggable.present);
}
store.subscribe(update);
update()
