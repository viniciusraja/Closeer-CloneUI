// react-navigation-stack

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from 'screens/LoginScreen';
import AlreadyHaveAccount from 'screens/LoginScreen/AlreadyHaveAccount'
import Header from 'components/Header'
import HomeScreen from 'screens/HomeScreen'
import InitialLoadingScreen from 'screens/InitialLoadingScreen'
import ScanQrCodeScreen from 'screens/ScanQrCodeScreen';
const LoginStack = createStackNavigator(
  {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown:false
      
    },
  },
  AlreadyHaveAccount: {
    screen: AlreadyHaveAccount,
    
    navigationOptions: {
      header:(()=><Header/>),
    },
  },
});

const LogedStack = createStackNavigator(
  {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }
  },
  ScanQrCodeScreen:{
      screen: ScanQrCodeScreen,
      navigationOptions: {
        header:(()=><Header/>),
      },
    }
});

  const Router = createSwitchNavigator(
    {
      AuthLoading: InitialLoadingScreen,
      Login: LoginStack,
      Home: LogedStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );
  
export default createAppContainer(Router);
