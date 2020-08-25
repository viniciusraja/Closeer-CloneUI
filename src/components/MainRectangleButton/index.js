import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Constants from 'config/constants';
import { styles } from './styles';
import { AntDesign} from '@expo/vector-icons';
export default function MainRectangleButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
        <AntDesign name={props.iconName} size={Constants.Fonts.mainButtonsIconSize} color="black" />
        <Text style={styles.buttonText}>{props.buttonName}</Text>
    </TouchableOpacity>
  )}
