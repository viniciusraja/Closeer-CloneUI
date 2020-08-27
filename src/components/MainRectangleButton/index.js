import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'config/constants';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
export default function MainRectangleButton(props) {
  const qrCode = useSelector((state) => state.getQrCode);
  return (
    <View style={styles.container}>
      {props.buttonName == 'Inicie seu Job' && !!qrCode.qrCodeUUID ? (
        <View style={styles.countDownContainer}>
          <Text style={styles.countDownText}>Seu Job termina em:</Text>
          <CountDown
            style={styles.countDown}
            size={25}
            until={qrCode.qrCodeUUID}
            onFinish={() => alert('Finished')}
            digitStyle={{}}
            digitTxtStyle={{ color: Constants.Colors.closeerPrimaryText }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: Constants.Colors.closeerPrimaryText }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />
        </View>
      ) : (
        <>
          <AntDesign
            style={styles.icon}
            name={props.iconName}
            size={Constants.Fonts.mainButtonsIconSize}
            color="black"
          />
          <Text style={styles.buttonText}>{props.buttonName}</Text>
        </>
      )}
    </View>
  );
}
