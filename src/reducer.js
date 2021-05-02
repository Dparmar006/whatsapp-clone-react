export const initialState = {
  user: null,
  activeRoom: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case "SET_ACTIVE_ROOM":
      return {
        ...state,
        activeRoom: action.activeRoom,
      };
    default:
      return state;
  }
};

export default reducer;
