import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Constants from 'config/constants'
import {styles} from './styles'
import { useNavigation } from 'react-navigation-hooks';

export default function LoginScreen() {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <Image 
            resizeMode="cover"
            style={{position:'absolute',width:'100%'}}
            source={require('assets/images/LoginBackground.png')}
            />
            <Image 
            resizeMode="contain"
            style={styles.logoImage}
            source={require('assets/images/logo-closeer-black.png')}
            />
           <View style={styles.loginButtons}>
            <TouchableOpacity style={styles.loginButton}>
                <View style={styles.loginButtonContainerBkg}>
                    <View style={styles.loginButtonContainer}>
                    <Text style={styles.loginButtonText}>CRIAR MINHA CONTA</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
                <View style={styles.loginButtonContainerBkg}>
                    <View style={styles.loginButtonContainer}>
                    <Text style={styles.loginButtonText}>TENHO UM CONVITE</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}
            onPress={()=>navigate('AlreadyHaveAccount')}
            >
                <View style={styles.loginButtonContainerBkg}>
                    <View style={styles.loginButtonContainer}>
                    <Text style={styles.loginButtonText}>JÁ TENHO CONTA</Text>
                    </View>
                </View>
            </TouchableOpacity>
          
           </View >
        </View>
    );
}

