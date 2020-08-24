import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'config/constants'
import {styles} from './styles'
export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open on your app!</Text>
            <Text style={styles.text}>Open on your app!</Text>
            <Text style={styles.text}>Open on your app!</Text>
        </View>
    );
}

