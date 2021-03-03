import { GET_DATA } from "../actionTypes";
const initialState = { data: [], index: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,

        data:
          state.index === 252
            ? [...state.data]
            : [...state.data, action.data[0]],
        index: state.index === 252 ? 252 : ++state.index,
      };
    }
    default:
      return state;
  }
};
