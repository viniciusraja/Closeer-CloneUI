import React, { useState } from 'react';
import { View, Animated, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Constants from 'config/constants';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

const MainRectangleSlideButton = (props) => {
  const translateX = new Animated.Value(0);
  const [balanceSliderIsOpen, setBalanceSliderIsOpen] = useState(false);
  let offset = 0;
  const cardWidth = Constants.Layout.window.width - 20;
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      let open = false;
      offset += translationX;

      if (
        (translationX <= cardWidth && translationX >= 70) ||
        (translationX <= 0 && translationX >= -40)
      ) {
        open = true;
      } else {
        translateX.setValue(offset);
        translateX.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateX, {
        toValue: open ? cardWidth : 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        offset = open ? cardWidth : 0;
        translateX.setOffset(offset);
        translateX.setValue(0);
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.balanceTextTitle}>Seu saldo é:</Text>
      <Text style={styles.balanceTextValue}>R$ 2500,00</Text>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Animated.View
          style={[
            styles.balaceSliderContainer,
            {
              transform: [
                {
                  translateX: translateX.interpolate({
                    inputRange: [-200, 0, cardWidth],
                    outputRange: [
                      -10,
                      0,
                      cardWidth / 2 - (cardWidth * 0.15) / 2,
                    ],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  scaleX: translateX.interpolate({
                    inputRange: [0, cardWidth],
                    outputRange: [1, 0.15],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <Animated.View
            style={[
              styles.balaceSliderTileContainer,
              {
                translateX: translateX.interpolate({
                  inputRange: [-200, 0, cardWidth],
                  outputRange: [-10, 0, 400],
                  extrapolate: 'clamp',
                }),
              },
              {
                opacity: translateX.interpolate({
                  inputRange: [-10, 0, 100],
                  outputRange: [0.7, 1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <AntDesign
              style={styles.icon}
              name="wallet"
              size={Constants.Fonts.mainButtonsIconSize}
              color={Constants.Colors.closeerPrimaryText}
            />
            <Text style={styles.balaceSliderTitle}>Deslize para ver saldo</Text>
            <AntDesign
              name="right"
              style={styles.icon}
              size={Constants.Fonts.smallFontSize}
              color={Constants.Colors.closeerPrimaryText}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default MainRectangleSlideButton;
