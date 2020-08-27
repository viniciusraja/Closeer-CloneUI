import { StyleSheet } from 'react-native';
import Constants from 'config/constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoImage: {
    position: 'absolute',
    width: '100%',
    top: 0.2 * Constants.Layout.window.height,
  },
  loginButtons: {
    height: '30%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButton: {
    height: '30%',
    width: '80%',
  },
  loginButtonContainerBkg: {
    opacity: 0.7,
    height: '100%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: Constants.Colors.closeerDark,
  },
  loginButtonContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: Constants.fontFamily,
    color: Constants.Colors.closeerLight,
    fontSize: Constants.Fonts.mediumFontSize,
  },
});
