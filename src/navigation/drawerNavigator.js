import * as React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import Header from 'components/Header'
import HomeScreen from 'screens/HomeScreen'
import { createStackNavigator } from 'react-navigation-stack';

import ScanQrCodeScreen from 'screens/ScanQrCodeScreen';
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {/* <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       /> */}
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
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
        headerShown:false
      },
    }
});
 const MyCalendarStack = createStackNavigator(
  {
    MyCalendarScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }},
  })
 const HelpStack = createStackNavigator(
  {
    HelpScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }},
  })
 const CurriculumStack = createStackNavigator(
  {
    CurriculumScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }},
  })
 const MyMoneyStack = createStackNavigator(
  {
    MyMoneyScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }},
  })
 const ConfigurationStack = createStackNavigator(
  {
    ConfigurationScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }},
  })
 const notificationsStack = createStackNavigator(
  {
    notificationsScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header:(()=><Header/>),
  }},
  })

const Drawer = createDrawerNavigator({
  Inicio:LogedStack,
  "Minha Agenda":HomeScreen,
  "Meu Currículo":CurriculumStack,
  "Meu Dinheiro":MyMoneyStack,
  "Avisos":notificationsStack,
  "Configuração":ConfigurationStack,
  Ajuda:HelpStack,
})

export default Drawer
