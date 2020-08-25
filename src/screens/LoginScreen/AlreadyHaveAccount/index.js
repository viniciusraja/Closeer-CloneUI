import React, {useState,useEffect} from 'react';

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
import userLogin from 'store/userLogin/actions'
import Constants from 'config/constants';
import { styles } from './styles';
export default function AlreadyHaveAccount() {
const [userCelNumber, setUserCelNumber] = useState('');
const { navigate } = useNavigation();
const dispatch = useDispatch();

async function SignIn(){
    try {
      await SecureStore.setItemAsync('userToken', userCelNumber)
      console.log( await SecureStore.getItemAsync('userToken'))
    } catch (error) {
      console.log(error);
    }
  }
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
          source={require('assets/images/logo-closeer-black.png')}
        />
        <View style={styles.inputAndButton}>
        <Text style={styles.insertUserNumberText}> Insira seu nº de telefone</Text>
        <TextInput
          style={styles.userNumberInput}
          placeholder="+55 (ddd) xxxxx-xxxx"
          placeholderTextColor={Constants.Colors.closeerFontColorGrey}
          onChangeText={(text) => setUserCelNumber(text)}
          defaultValue={userCelNumber}
          />
        <TouchableOpacity style={styles.loginButton}
        onPress={()=>{
          SignIn()
          dispatch(userLogin())
          navigate('HomeScreen')
        }}
        >
          <View style={styles.loginButtonContainerBkg}>
            <View style={styles.loginButtonContainer}>
              <Text style={styles.loginButtonText}>ACESSAR CONTA</Text>
            </View>
          </View>
        </TouchableOpacity>
          </View>
        <View style={{height:"20%", width:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.forgotYourNumberText}>Esqueceu seu número ou não consegue fazer login?</Text>
        <TouchableOpacity 
        onPress={async()=>await SecureStore.deleteItemAsync('userToken')}
        >
        <Text style={[styles.forgotYourNumberText,{fontFamily:Constants.Fonts.primaryFontFamily}]}> Toque aqui.</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.warningText}>Ao clicar em continuar você concorda em receber o código de acesso Closeer via telefone.</Text>
      </View>
    </View>
  );
}
