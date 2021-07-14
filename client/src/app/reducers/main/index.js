import {
  STOP_LOADING,
  SET_IS_LAST,
  SET_ALL_USERS,
  SET_ALL_MESSAGES,
  CONNECTED,
  DISCONNECTED,
  SET_LOGIN_STATUS,
} from '../../constants';

const state = {
  allUsers: [],
  allMessages: [],
  userNickName: '',
  webSocket: null,
  isLoading: false,
  hasLogin: false,
  isLast: false,
};

const reducer = (state, action) => {
  const { type: actionType } = action;
  switch (actionType) {
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_IS_LAST:
      return {
        ...state,
        isLast: true,
      };
    case SET_ALL_USERS: {
      const {
        payload: { users: allUsers },
      } = action;
      return {
        ...state,
        allUsers,
      };
    }
    case SET_ALL_MESSAGES: {
      const {
        payload: { message },
      } = action;
      const { allMessages } = state;
      return {
        ...state,
        allMessages: [...allMessages, message],
      };
    }
    case CONNECTED: {
      const {
        payload: { user },
      } = action;
      const { allUsers } = state;
      return {
        ...state,
        allUsers: [...allUsers, user],
      };
    }
    case DISCONNECTED: {
      const {
        payload: { id },
      } = action;
      const { allUsers } = state;
      return {
        ...state,
        allUsers: allUsers.filter(({ id: userId }) => userId !== id),
      };
    }
    case SET_LOGIN_STATUS: {
      const {
        payload: { nickName, webSocket, isLoading, hasLogin },
      } = action;
      return {
        ...state,
        nickName,
        webSocket,
        isLoading,
        hasLogin,
      };
    }
    default:
      throw new Error();
  }
};

export { state, reducer };
