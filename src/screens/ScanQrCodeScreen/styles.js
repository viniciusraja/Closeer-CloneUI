import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  scanAgainButtom: {
    position: 'absolute',
    bottom: Constants.Layout.headerHeight,
    height: '7%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Constants.Colors.closeerDark,
  },
  scanAgainButtomText: {
    textAlign: 'center',
    color: Constants.Colors.closeerLight,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
  },
});
