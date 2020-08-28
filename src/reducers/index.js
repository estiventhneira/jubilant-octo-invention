/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };

    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((items) => {
          return items.id !== action.payload;
        }),
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "VIDEO_REQUEST":
      return {
        ...state,
        playing:
          state.trends.find(({ id }) => id === Number(action.payload)) ||
          state.originals.find(({ id }) => id === Number(action.payload)) ||
          [],
      };

    default:
      return state;
  }
};

export default reducer;
