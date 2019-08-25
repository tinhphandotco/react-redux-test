import { createStore } from 'redux'
import rootReudcers from './reducers'

const store = createStore(
  rootReudcers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store