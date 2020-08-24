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
      fontFamily:Constants.fontFamily
    }
}); 
