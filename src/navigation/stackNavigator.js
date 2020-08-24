// react-navigation-stack

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'screens/LoginScreen';
import Header from 'components/Header'
const AppNavigator = createStackNavigator(
  {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header:(()=><Header/>),
    },
            
  },
});
  const Router = createAppContainer(AppNavigator);
  
export default Router;
