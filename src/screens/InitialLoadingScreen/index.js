import React, {useEffect} from 'react';

import * as SecureStore from 'expo-secure-store';
import {
    View,
} from 'react-native';
import Constants from 'config/constants';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';

import getUserInfo from 'store/userInfo/actions'


export default function InitialLoadingScreen() {
const { navigate } = useNavigation();
const dispatch = useDispatch();

useEffect(() => {
    (async () => {
      
      try {
        const token=await SecureStore.getItemAsync('userToken')
        if(token=="QpwL5tke4Pnpja7X4"){
          navigate('HomeScreen')
          const userId=await SecureStore.getItemAsync('userId')
          dispatch(getUserInfo(userId))

        }
        else{navigate('LoginScreen')}
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  return(<View/>)
}
