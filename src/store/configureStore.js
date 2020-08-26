import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userLogin from 'store/userLogin/reducers'
import getUserInfo from 'store/userInfo/reducer'
import getQrCode from 'store/qrCode/reducer'
const rootReducer = combineReducers({
    userLogin,
    getUserInfo,
    getQrCode
});

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
