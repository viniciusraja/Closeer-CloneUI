import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'config/constants';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import { setQrCode } from 'store/qrCode/actions';
export default function MainRectangleButton(props) {
  const dispatch = useDispatch();
  const qrCode = useSelector((state) => state.getQrCode);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    dispatch(setQrCode(''));
  }, [timerEnded]);
  return (
    <View style={styles.container}>
      {props.buttonName == 'Inicie seu Job' && !!qrCode.qrCodeUUID ? (
        <View style={styles.countDownContainer}>
          <Text style={styles.countDownText}>Seu Job termina em:</Text>
          <CountDown
            style={styles.countDown}
            size={25}
            until={qrCode.qrCodeUUID}
            onFinish={() => {
              alert('Job finalizado!');
              setTimerEnded(!timerEnded);
            }}
            digitStyle={{}}
            digitTxtStyle={{ color: Constants.Colors.closeerPrimaryText }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: Constants.Colors.closeerPrimaryText }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: null, m: null, s: null }}
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
