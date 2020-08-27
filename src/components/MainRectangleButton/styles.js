import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    height: Constants.Layout.window.height * 0.15,
    width: Constants.Layout.window.width - 20,
    borderRadius: Constants.Layout.window.height * 0.015,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: Constants.Colors.closeerLight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 2,
  },
  buttonText: {
    marginLeft:10,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    width: '60%',
    textAlign: 'left',
  },
  icon: {
  },
  countDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countDown: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  countDownText: {
    position: 'absolute',
    top: 10,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.smallFontSize,
    textAlign: 'center',
  },
});
