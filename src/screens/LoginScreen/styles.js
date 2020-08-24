import { StyleSheet} from 'react-native';
import Constants from 'config/constants'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      fontFamily:Constants.fontFamily,
      fontSize:Constants.Fonts.bigFontSize
    },
    text1:{
      fontFamily:Constants.fontFamily,
      fontSize:Constants.Fonts.smallFontSize
    },
    text2:{
      fontFamily:Constants.fontFamily,
      fontSize:Constants.Fonts.mediumFontSize
    },
}); 
  