import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from 'react-navigation-hooks';

import Constants from 'config/constants';
import { styles } from './styles';

export default function ScanQrCodeScreen() {
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

  // useEffect(() =>{
  //   if(!!navigationData.route)navigate(`${navigationData.route}`)
  // }, [navigationData]);
  const sendUserPointsForRecycling = async (qrCodeUUID) => {
    // try {
    //   api
    //     .get(`recycling/${qrCodeUUID}`, { headers: { user: 1 } })
    //     .then((res) => res.data)
    //     .then((res) => {
    //       if (res == 'ok') navigate(`UserPoints`);
    //     })
    //     .catch((error) => console.log(error));
    // } catch (error) {
    //   Alert.alert(error);
    // }
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    // const qrCodeUUID = data;
    // try {
    //   setScanned(true);
    //   setQrCodeData(qrCodeUUID);
    // } catch (error) {
    //   console.log(error);
    // }
    // if (qrCodeData.split('/')[0] == 'advertisement') {
    //   dispatch(showHintComponent());
    // } else {
    //   sendUserPointsForRecycling(qrCodeUUID);
    // }
    // Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

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
        {/* <ScanIcon style={{ height: 250, width: 250 }} /> */}

        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.scanAgainButtom}>
            <Text style={styles.scanAgainButtomText}>Tente de Novo</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  )
}
