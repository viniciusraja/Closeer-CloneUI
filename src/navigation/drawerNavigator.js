import * as React from 'react';
import { Button, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';
import ScanQrCodeScreen from 'screens/ScanQrCodeScreen';
import Constants from 'config/constants';
import CustomDrawer from 'components/CustomDrawerHeader';
import CustomDrawerHeader from 'components/CustomDrawerHeader';
import MyCalendarScreen from 'screens/MyCalendarScreen';
import HelpScreen from 'screens/HelpScreen';
import MyCurriculumScreen from 'screens/MyCurriculumScreen';
import MyMoneyScreen from 'screens/MyMoneyScreen';
import ConfigurationScreen from 'screens/ConfigurationScreen';
import NotificationsScreen from 'screens/NotificationsScreen';

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
    screen: MyCalendarScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const HelpStack = createStackNavigator({
  HelpScreen: {
    screen: HelpScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const MyCurriculumStack = createStackNavigator({
  MyCurriculumScreen: {
    screen: MyCurriculumScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const MyMoneyStack = createStackNavigator({
  MyMoneyScreen: {
    screen: MyMoneyScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const ConfigurationStack = createStackNavigator({
  ConfigurationScreen: {
    screen: ConfigurationScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});
const NotificationsStack = createStackNavigator({
  NotificationsScreen: {
    screen: NotificationsScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});

const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView
        style={{ height: '100%' }}
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <CustomDrawerHeader />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
    <TouchableOpacity
      style={{
        width: '80%',
        height: '6%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
      }}>
      <View
        style={{
          opacity: 0.8,
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Constants.Colors.closeerThirdColor,
          borderRadius: 60,
        }}>
        <Ionicons
          name="md-share"
          size={24}
          color={Constants.Colors.closeerPrimaryText}
        />
        <Text
          style={{
            fontFamily: Constants.Fonts.secondaryFontFamily,
            fontSize: Constants.Fonts.smallFontSize,
            marginLeft: 10,
          }}>
          Indique e ganhe bônus
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const Drawer = createDrawerNavigator(
  {
    Inicio: {
      screen: LogedStack,
      navigationOptions: {
        title: 'Início',
        drawerIcon: ({ focused }) => (
          <SimpleLineIcons
            name="home"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
    MyCalendar: {
      screen: MyCalendarStack,
      navigationOptions: {
        title: 'Minha Agenda',
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="ios-calendar"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
    MyCurriculum: {
      screen: MyCurriculumStack,
      navigationOptions: {
        title: 'Meu Currículo',
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-paper"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
    MyMoney: {
      screen: MyMoneyStack,
      navigationOptions: {
        title: 'Meu Dinheiro',
        drawerIcon: ({ focused }) => (
          <AntDesign
            name="wallet"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
    MyNotifications: {
      screen: NotificationsStack,
      navigationOptions: {
        title: 'Avisos',
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-information-circle-outline"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
    Configurations: {
      screen: ConfigurationStack,
      navigationOptions: {
        title: 'Configurações',
        drawerIcon: ({ focused }) => (
          <SimpleLineIcons
            name="settings"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
    Help: {
      screen: HelpStack,
      navigationOptions: {
        title: 'Ajuda',
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="ios-help-circle-outline"
            size={24}
            color={Constants.Colors.closeerLight}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: Constants.Colors.closeerDark,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      itemStyle: { fontSize: 50 },
      labelStyle: {
        fontWeight: 'normal',
      },
      activeTintColor: Constants.Colors.closeerLight,
      inactiveTintColor: Constants.Colors.closeerLight,
      activeBackgroundColor: '#121212',
    },
  }
);

export default Drawer;
