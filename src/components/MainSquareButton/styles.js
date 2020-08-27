import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    height: Constants.Layout.window.height * 0.15,
    width: (Constants.Layout.window.width - 30) / 2,
    borderRadius: Constants.Layout.window.height * 0.015,
    paddingHorizontal: 0.02 * Constants.Layout.window.width,
    flexDirection: 'row',
    backgroundColor: Constants.Colors.closeerLight,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    paddingLeft: 10,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    width: '65%',
    textAlign: 'left',
  },
});
