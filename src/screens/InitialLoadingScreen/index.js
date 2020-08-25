import React, {useEffect} from 'react';

import * as SecureStore from 'expo-secure-store';
import {
    View,
} from 'react-native';
import Constants from 'config/constants';
import { useNavigation } from 'react-navigation-hooks';
export default function InitialLoadingScreen() {
const { navigate } = useNavigation();
console.log('InitialScreen')
useEffect(() => {
    (async () => {
      try {
        if(!! await SecureStore.getItemAsync('userToken'))navigate('HomeScreen')
        navigate('LoginScreen')
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  return(<View/>)
}
