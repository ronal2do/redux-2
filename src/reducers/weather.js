import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //state.concat([action.payload.data]); //state.push( action.payload.data );
    default:
      return state;
  }
}

// export default function(state = null, action) {
//   console.log('Action received', action);
//   return state;
// }
