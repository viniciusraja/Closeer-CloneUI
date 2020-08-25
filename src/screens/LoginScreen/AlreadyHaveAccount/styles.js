import { StyleSheet} from 'react-native';
import Constants from 'config/constants'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage:{
        width:'50%',
    },
    validationContainer:{
        height:'70%',
        width:'80%',
        justifyContent:'space-around',
        alignItems:'center',
    },
    validationContainerBkg:{
        position:'absolute',
        top:0,
        height:'100%',
        width:'100%',
        backgroundColor:Constants.Colors.closeerBackgroundColor,
        opacity:0.8,
        borderRadius:15,
       
    },
    inputAndButton:{
        height:'40%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
    },
    insertUserNumberText:{
        fontSize:Constants.Fonts.mediumFontSize,
        fontFamily:Constants.Fonts.primaryFontFamily,
    },
    userNumberInput:{
        height:'25%',
        width:'80%',
        fontFamily:Constants.Fonts.primaryFontFamily,
        
        backgroundColor:Constants.Colors.closeerBackgroundColor,
        color:Constants.Colors.closeerSecondaryText,
        borderRadius:50,
        textAlign:'center',
    },
    loginButton:{
      height:'25%',
      width:'80%', 
    },
    loginButtonContainerBkg:{
      opacity:0.7, 
      height:'100%',
      width:'100%',
      borderRadius:30,
      backgroundColor:Constants.Colors.closeerThirdColor,
    },
    loginButtonContainer:{
      height:'100%',
      width:'100%',
      borderRadius:30,
      justifyContent:'center',
      alignItems:'center'
    },
    loginButtonText:{
      color:Constants.Colors.closeerLight,
      fontSize:Constants.Fonts.mediumFontSize,
      fontFamily:Constants.Fonts.primaryFontFamily,
    },
    forgotYourNumberText:{
        fontFamily:Constants.Fonts.secondaryFontFamily,
        width:'70%',
        textAlign:"center",
    },
    warningText:{
      width:'70%',
      fontFamily:Constants.Fonts.primaryFontFamily,
      color:Constants.Colors.closeerSecondaryText,
      fontSize:Constants.Fonts.smallFontSize,
      textAlign:"center",

    }
}); 
  