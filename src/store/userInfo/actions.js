import * as SecureStore from 'expo-secure-store';
import api from 'services/api';

function getUserInfoPending() {
  return {
    type: 'GET_USER_INFO_PENDING',
  };
}
function getUserInfoError(error) {
  return {
    type: 'GET_USER_INFO_ERROR',
    payload: error,
  };
}
function getUserInfoSuccess(data) {
  return {
    type: 'GET_USER_INFO_SUCCESS',
    payload: data,
  };
}
function getUserInfo(userId) {
  return (dispatch) => {
    dispatch(getUserInfoPending());
    api
      .get(`/api/users/${userId}`)
      .then(async (res) => {
        dispatch(getUserInfoSuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(getUserInfoError(error));
      });
  };
}
export default getUserInfo;
