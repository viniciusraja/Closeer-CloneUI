import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from 'react-navigation-hooks';
import { Ionicons } from '@expo/vector-icons';

import Constants from 'config/constants';
import { styles } from './styles';
import Header from 'components/Header';
import ScanIcon from 'assets/svgs/ScanIcon.svg';
import { setQrCode } from 'store/qrCode/actions';

export default function ScanQrCodeScreen() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [hintComponent, setHintComponent] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    const qrCodeUUID = data;
    try {
      setScanned(true);
      dispatch(setQrCode(qrCodeUUID));
    } catch (error) {
      console.log(error);
    }

    navigate('HomeScreen');

    Alert.alert(`Seu Job foi iniciado!`);
  };
  setTimeout(function () {
    dispatch(setQrCode(20));
    navigate('HomeScreen');
  }, 2000);

  if (hasPermission === null) {
    return <Text>Pedindo Permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  return (
    <>
      <View style={styles.qrCodeContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />
        <ScanIcon style={{ height: 230, width: 230 }} />

        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.scanAgainButtom}>
            <Text style={styles.scanAgainButtomText}>TENTE NOVAMENTE</Text>
          </TouchableOpacity>
        )}
        <View style={{ position: 'absolute', top: 0 }}>
          <Header />
        </View>
      </View>
    </>
  );
}
