import {createStore, combineReducers} from 'redux'

import Counter from './reducer/counter'
import Todo from './reducer/todo'

const reducers = combineReducers({Counter, Todo})

const store = createStore(reducers)

export default store