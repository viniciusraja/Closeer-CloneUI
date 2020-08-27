import * as React from 'react';
import { Button, View, ScrollView } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import { createStackNavigator} from 'react-navigation-stack';
import ScanQrCodeScreen from 'screens/ScanQrCodeScreen';
import Constants from 'config/constants';
import CustomDrawer from 'components/CustomDrawer';

const LogedStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  ScanQrCodeScreen: {
    screen: ScanQrCodeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const MyCalendarStack = createStackNavigator({
  MyCalendarScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const HelpStack = createStackNavigator({
  HelpScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const CurriculumStack = createStackNavigator({
  CurriculumScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const MyMoneyStack = createStackNavigator({
  MyMoneyScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const ConfigurationStack = createStackNavigator({
  ConfigurationScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const notificationsStack = createStackNavigator({
  notificationsScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <Header/>
    <SafeAreaView
      style={{flex:1}}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props}/>
      {/* <CustomDrawer {...props}/> */}

    </SafeAreaView>
  </ScrollView>
);

const Drawer = createDrawerNavigator({
  Inicio:{
    screen:LogedStack,
    navigationOptions :{  
      title: 'Início',
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-person" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
      )}
  },
  'Minha Agenda': HomeScreen,
  'Meu Currículo': CurriculumStack,
  'Meu Dinheiro': MyMoneyStack,
  Avisos: notificationsStack,
  Configuração: ConfigurationStack,
  Ajuda: HelpStack,
},
{
  drawerBackgroundColor:Constants.Colors.closeerDark,
  contentComponent:CustomDrawerContentComponent,
  contentOptions:{
    itemStyle:{fontSize:50},
    labelStyle:{
      fontWeight: 'normal',
    },
    activeTintColor:Constants.Colors.closeerFirstColor,
    inactiveTintColor:Constants.Colors.closeerLight,
  }
  // contentComponent:CustomDrawer
}
);

export default Drawer;
