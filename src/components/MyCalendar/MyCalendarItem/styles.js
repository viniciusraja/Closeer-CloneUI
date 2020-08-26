import { StyleSheet} from 'react-native';
import Constants from 'config/constants'

export const styles = StyleSheet.create({
    container: {
        height:Constants.Layout.window.height*0.15,
        width:(Constants.Layout.window.width-30)/2,
        borderRadius:Constants.Layout.window.height*0.015,
        padding:10,
        flexDirection:'row',
        backgroundColor: Constants.Colors.closeerLight,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        elevation:2,
      },
      dayNameText:{
        fontFamily:Constants.Fonts.primaryFontFamily,
        fontSize:Constants.Fonts.largeFontSize,
        width:70,
        textAlign:'right',
        textAlignVertical:'center'
      },
      dayNumberText:{
        textAlign:'left',
        fontFamily:Constants.Fonts.secondaryFontFamily,
        fontSize:Constants.Fonts.xLargeFontSize,
        width:70,
        textAlignVertical:'center'
      },
      workPeriodContainer:{
        position:"absolute",
        bottom:10,
        right:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        height:'40%',
        width:100
      },
      workPeriodText:{
      fontFamily:Constants.Fonts.primaryFontFamily,
      borderRadius:20,
      borderWidth:1,
      borderColor:Constants.Colors.closeerDark,
      fontSize:Constants.Fonts.mediumFontSize,
      textAlignVertical:'center',
      textAlign:'center',
      height:25,
      width:25,
      borderRadius:30,
      textAlign:'center'
    },
}); 
