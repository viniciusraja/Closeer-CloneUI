import * as React from 'react';
import { Button, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import { createStackNavigator} from 'react-navigation-stack';
import ScanQrCodeScreen from 'screens/ScanQrCodeScreen';
import Constants from 'config/constants';
import CustomDrawer from 'components/CustomDrawerHeader';
import CustomDrawerHeader from 'components/CustomDrawerHeader';

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
  <View     style={{flex:1}}
    >

  <ScrollView
    style={{flex:1}}
   >
    <SafeAreaView
      style={{height:'100%'}}
      forceInset={{ top: 'always', horizontal: 'never' }}
      >
      <CustomDrawerHeader/>
      <DrawerItems {...props}/>
    </SafeAreaView>
  </ScrollView>
      <TouchableOpacity style={{width:'80%', height:'6%',alignSelf:'center', position:'absolute', bottom:10}}>
      <View style={{opacity:0.8,flexDirection:'row',width:'100%', height:'100%',justifyContent:'center',alignItems:'center', backgroundColor:Constants.Colors.closeerThirdColor, borderRadius:60}}>
      <Ionicons name="md-share" size={24} color={Constants.Colors.closeerPrimaryText} />
      <Text style={{fontFamily:Constants.Fonts.secondaryFontFamily, fontSize:Constants.Fonts.smallFontSize, marginLeft:10}}>Indique e ganhe bônus</Text>
      </View>
      </TouchableOpacity>      
      </View>
);

const Drawer = createDrawerNavigator({
  Inicio:{
    screen:LogedStack,
    navigationOptions :{  
      title: 'Início',
      drawerIcon: ({ focused }) => (
        <SimpleLineIcons name="home" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
      )}
      
    },
    MyCalendar:{
      screen:MyCalendarStack,
          navigationOptions :{  
            title: 'Minha Agenda',
            drawerIcon: ({ focused }) => (
              <Ionicons name="ios-calendar" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
            )}
    },
    MyCurriculum:{
      screen:CurriculumStack,
          navigationOptions :{  
            title: 'Meu Currículo',
            drawerIcon: ({ focused }) => (
              <Ionicons name="md-paper" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
            )}
    },
    MyMoney:{
      screen:MyMoneyStack,
          navigationOptions :{  
            title: 'Meu Dinheiro',
            drawerIcon: ({ focused }) => (
              <AntDesign name="wallet" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
            )}
    },
    MyNnotifications:{
      screen:notificationsStack,
          navigationOptions :{  
            title: 'Avisos',
            drawerIcon: ({ focused }) => (
              <Ionicons name="md-information-circle-outline" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
            )}
    },
    Configurations:{
      screen:ConfigurationStack,
          navigationOptions :{  
            title: 'Configurações',
            drawerIcon: ({ focused }) => (
              <SimpleLineIcons name="settings" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
            )}
    },
    Help:{
      screen:HelpStack,
          navigationOptions :{  
            title: 'Ajuda',
            drawerIcon: ({ focused }) => (
              <Ionicons name="ios-help-circle-outline" size={24} color={focused ? Constants.Colors.closeerFirstColor:Constants.Colors.closeerLight } />
            )}
    },
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
