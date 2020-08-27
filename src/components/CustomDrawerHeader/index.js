import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'config/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

export default function CustomDrawerHeader(props) {
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  return (
    <TouchableOpacity style={styles.headerButton} onPress={() => {}}>
      <View style={styles.userInformationContainer}>
        <View style={styles.userImageContainer}>
          <Image
            resizeMode="cover"
            style={styles.userImage}
            source={{ uri: userInfo.avatar }}
          />
        </View>
        <View style={styles.userInformationTextContainer}>
          <Text style={styles.userNameText}>
            {userInfo.first_name} {userInfo.last_name}
          </Text>
          <View style={styles.userVerificationContainer}>
            <Text style={styles.userVerificationText}>Verificado</Text>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={15}
              color={Constants.Colors.closeerThirdColor}
            />
          </View>
          <View style={styles.userVerificationContainer}>
            <Text style={styles.userVerificationText}>5.0</Text>
            <Ionicons
              name="ios-star"
              size={15}
              color={Constants.Colors.closeerThirdColor}
            />
          </View>
        </View>
      </View>
      <View style={styles.headerSeparatorBar} />
    </TouchableOpacity>
  );
}
