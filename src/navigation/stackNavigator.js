// react-navigation-stack

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from 'screens/LoginScreen';
import AlreadyHaveAccount from 'screens/LoginScreen/AlreadyHaveAccount';
import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import InitialLoadingScreen from 'screens/InitialLoadingScreen';
import ScanQrCodeScreen from 'screens/ScanQrCodeScreen';
import Drawer from './drawerNavigator';
import CreateAccount from 'screens/LoginScreen/CreateAccount';
import HaveInvite from 'screens/LoginScreen/HaveInvite';
const LoginStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  AlreadyHaveAccount: {
    screen: AlreadyHaveAccount,

    navigationOptions: {
      header: () => <Header />,
    },
  },
  CreateAccount: {
    screen: CreateAccount,

    navigationOptions: {
      header: () => <Header />,
    },
  },
  HaveInvite: {
    screen: HaveInvite,

    navigationOptions: {
      header: () => <Header />,
    },
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: InitialLoadingScreen,
    Login: LoginStack,
    Home: Drawer,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppSwitchNavigator);
