import React, { useState, useEffect } from 'react';

import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import userLogin from 'store/userLogin/actions';
import Constants from 'config/constants';
import { styles } from './styles';
export default function AlreadyHaveAccount() {
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  const [userCelNumber, setUserCelNumber] = useState('');
  const mockConfirmationCode = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!userInfo.email) navigate('HomeScreen');
  }, [userInfo]);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={{ position: 'absolute', width: '100%' }}
        source={require('assets/images/LoginBackground.png')}
      />
      <View style={styles.validationContainer}>
        <View style={styles.validationContainerBkg} />
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={require('assets/images/logo-closeer-black2.png')}
        />
        <View style={styles.inputAndButton}>
          <Text style={styles.insertUserNumberText}>
            Insira seu nº de telefone
          </Text>
          <TextInput
            style={styles.userNumberInput}
            placeholder="+55 (ddd) xxxxx-xxxx"
            placeholderTextColor={Constants.Colors.closeerFontColorGrey}
            onChangeText={(text) => setUserCelNumber(text)}
            defaultValue={userCelNumber}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              dispatch(userLogin(mockConfirmationCode));
            }}>
            <View style={styles.loginButtonContainerBkg}>
              <View style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>ACESSAR CONTA</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '20%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.forgotYourNumberText}>
            Esqueceu seu número ou não consegue fazer login?
          </Text>
          <TouchableOpacity
            onPress={async () =>
              await SecureStore.deleteItemAsync('userToken')
            }>
            <Text
              style={[
                styles.forgotYourNumberText,
                { fontFamily: Constants.Fonts.primaryFontFamily },
              ]}>
              {' '}
              Toque aqui.
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.warningText}>
          Ao clicar em continuar você concorda em receber o código de acesso
          Closeer via telefone.
        </Text>
      </View>
    </View>
  );
}
