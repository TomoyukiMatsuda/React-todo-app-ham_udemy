import { INCREMENT, DECREMENT } from '../actions';

const initialState = { value: 0 };

export default (state = initialState, aciton) => {
  switch (aciton.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}
