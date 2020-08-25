import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from 'config/constants';
import { styles } from './styles';
import MainSquareButton from 'components/MainSquareButton'
import MainRectangleButton from 'components/MainRectangleButton'
export default function LoginScreen() {
const [userCelNumeber, setUserCelNumeber] = useState('');
  return (
    <View style={styles.container}>
      <MainRectangleButton iconName="qrcode" buttonName="Iniciar Job"/>
      <MainRectangleButton iconName="wallet" buttonName="Iniciar Job"/>
      <View style={{width:'100%', justifyContent:'space-evenly',flexDirection:'row'}}>
        <MainSquareButton iconName="ios-calendar" buttonName="Minha Agenda"/>
        <MainSquareButton iconName="md-paper" buttonName="Meu Currículo"/>
      </View>
      <View style={{width:'100%', justifyContent:'space-evenly',flexDirection:'row'}}>
        <MainSquareButton iconName="md-information-circle-outline" buttonName="Meu Currículo"/>
        <MainSquareButton iconName="ios-help-circle-outline" buttonName="Preciso de ajuda"/>
        </View>
    </View>
  );
}
