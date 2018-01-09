import {createStore} from 'redux';
import {toDoReducer} from './reducers';

export default createStore(toDoReducer);
