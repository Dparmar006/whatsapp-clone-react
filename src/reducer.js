export const initialState = {
  user: null,
  activeRoom: null,
  roomAvatar: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ACTIVE_ROOM: "SET_ACTIVE_ROOM",
  SET_ROOM_AVATAR: "SET_ROOM_AVATAR",
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
    case "SET_ROOM_AVATAR":
      return {
        ...state,
        roomAvatar: action.roomAvatar,
      };
    default:
      return state;
  }
};

export default reducer;
