import { combineReducers } from 'redux';
import { namespaced } from 'redux-subspace';


const initialState = {
  isChanging: false,
  value: 0
}

function counter(state = initialState, action) {
  switch (action.type) {
    case 'START_COUNTER_CHANGE':
      return {
        isChanging: true,
        ...state
      }
    case 'END_COUNTER_CHANGE':
      return {
        isChanging: false,
        value: 9999
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  counter,
  subCounter: namespaced('subCounter')(counter)
});

export default reducer;
