import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Constants from 'config/constants';
import { styles } from './styles';
import MainSquareButton from 'components/MainSquareButton';
import MainRectangleButton from 'components/MainRectangleButton';
import MyCalendarList from 'components/MyCalendar/MyCalendarList';
export default function HomeScreen() {
  const [userCelNumeber, setUserCelNumeber] = useState('');
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <MyCalendarList />
      <TouchableOpacity
        onPress={() => {
          navigate('ScanQrCodeScreen');
        }}>
        <MainRectangleButton iconName="qrcode" buttonName="Inicie seu Job" />
      </TouchableOpacity>
      <MainRectangleButton
        iconName="wallet"
        buttonName="Pressione para ver saldo"
      />
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <MainSquareButton iconName="ios-calendar" buttonName="Minha Agenda" />
        <MainSquareButton iconName="md-paper" buttonName="Meu Currículo" />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <MainSquareButton
          iconName="md-information-circle-outline"
          buttonName="Meu Currículo"
        />
        <MainSquareButton
          iconName="ios-help-circle-outline"
          buttonName="Preciso de ajuda"
        />
      </View>
    </View>
  );
}
