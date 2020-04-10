import {createStore} from 'redux';
import Reducer from './reduce'
const store = createStore(Reducer);
console.log(store,'store')
export default store;