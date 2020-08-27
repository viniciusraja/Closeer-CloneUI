import { StyleSheet } from "react-native";
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  headerButton:{
    width:"100%",
    height:"20%",
    paddingVertical:10,
    justifyContent:'space-between',

  },
  userInformationContainer: {
    paddingLeft:10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userInformationTextContainer:{
    paddingLeft:10,
    
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
  userNameText: {
    fontSize: Constants.Fonts.mediumFontSize,
    fontFamily: Constants.Fonts.primaryFontFamily,
    color: Constants.Colors.closeerTerciaryText,
  },
  userVerificationContainer:{
    flexDirection:'row',
  },
  userVerificationText:{
    marginRight:5,
    fontSize: Constants.Fonts.smallFontSize,
    fontFamily: Constants.Fonts.secondaryFontFamily,
    color: Constants.Colors.closeerTerciaryText,
  },
  headerSeparatorBar:{
    top:10,
    height:2,
    width:'100%',
    backgroundColor:Constants.Colors.closeerThirdColor
  }
}) 