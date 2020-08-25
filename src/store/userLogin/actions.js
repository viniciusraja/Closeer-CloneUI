  import * as SecureStore from 'expo-secure-store';
  import getUserInfo from 'store/userInfo/actions'
  import api from 'services/api'
  import { useNavigation } from 'react-navigation-hooks';


   function userLoginPending() {
    return {
      type: "USER_LOGIN_PENDING",
    };
  }
  function userLoginError(error) {
    return {
      type: "USER_LOGIN_ERROR",
      payload: error,
    };
  }
  function userLoginSuccess() {
    return {
      type: "USER_LOGIN_SUCCESS",
    };
  }
  function userLogin(userData) {

     return (dispatch) => {
        dispatch(userLoginPending())
        api
        .post('/api/register', userData)
        .then(async (res) => {
          await SecureStore.setItemAsync('userToken', res.data.token)
          await SecureStore.setItemAsync('userId', `${res.data.id}`)
          dispatch(
            getUserInfo(res.data.id)
          );
        })
          .catch((error) => {
            console.log(error)
            dispatch(userLoginError(error));
          })
  }
  }
  export default userLogin;