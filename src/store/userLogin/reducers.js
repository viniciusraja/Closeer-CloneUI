const initialState = {
  pending: false,
  error: false,
};

const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
      };
    case 'USER_LOGIN_PENDING':
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
};

export default userLogin;
