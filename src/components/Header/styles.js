import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    height: Constants.Layout.headerHeight,
    paddingHorizontal: 0.04 * Constants.Layout.window.width,
    flexDirection: 'row',
    backgroundColor: Constants.Colors.closeerBackgroundColor,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: '100%',
  },
  userInformationContainer: {
    height: 0.9 * Constants.Layout.headerHeight,
    width:'45%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  userInformationText: {
    fontSize:Constants.Fonts.largeFontSize,
    fontFamily: Constants.Fonts.primaryFontFamily,
    color:Constants.Colors.closeerPrimaryText
  },
  userImageContainer: {
    height: 0.8 * Constants.Layout.headerHeight,
    width: 0.8 * Constants.Layout.headerHeight,
    borderRadius: Constants.Layout.headerHeight,
  },
  userImage: {
    height: '100%',
    borderRadius: Constants.Layout.headerHeight,
  },
});
