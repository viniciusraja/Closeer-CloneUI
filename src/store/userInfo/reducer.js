const initialState = {
  pending: false,
  error: false,
  userInfo: '',
};

const getUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'GET_USER_INFO_PENDING':
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
};

export default getUserInfo;
