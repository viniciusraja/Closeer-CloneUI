import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'config/constants';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { DrawerActions } from '@react-navigation/native';

import { useNavigation, useNavigationState } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './styles'
import { DrawerItems } from 'react-navigation-drawer';
export default function CustomDrawer(props){ 
    //     <ScrollView>
//     <SafeAreaView
//       style={styles.container}
//       forceInset={{ top: 'always', horizontal: 'never' }}
//     >
//       {/* <DrawerItems {...props} /> */}
//     </SafeAreaView>
//   </ScrollView>
}
