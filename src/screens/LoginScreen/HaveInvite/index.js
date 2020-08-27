import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigationState } from 'react-navigation-hooks';
import Constants from 'config/constants';

export default function HaveInvite() {
  const { routeName } = useNavigationState();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Constants.Colors.closeerBackgroundColor,
        }}>
        <Text style={{ fontSize: Constants.Fonts.largeFontSize }}>
          {routeName}
        </Text>
      </View>
    </>
  );
}
