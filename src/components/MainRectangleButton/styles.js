import { StyleSheet} from 'react-native';
import Constants from 'config/constants'

export const styles = StyleSheet.create({
    container: {
        height:Constants.Layout.window.height*0.15,
        width:(Constants.Layout.window.width-20),
        borderRadius:Constants.Layout.window.height*0.015,
        paddingHorizontal:0.02*Constants.Layout.window.width,
        flexDirection:'row',
        backgroundColor: Constants.Colors.closeerLight,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2
    },
    buttonText:{
      fontFamily:Constants.Fonts.primaryFontFamily,
      fontSize:Constants.Fonts.mediumFontSize,
      width:'60%',
      textAlign:'center',
    },
    icon:{
      position:'absolute',
      left:20
    },
    countDownContainer:{
      justifyContent:'center',
      alignItems:'center',
    },
    countDown:{
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
    },
    countDownText:{
      position:"absolute",
      top:10,
      fontFamily:Constants.Fonts.primaryFontFamily,
      fontSize:Constants.Fonts.smallFontSize,
      textAlign:'center'
    }
}); 
