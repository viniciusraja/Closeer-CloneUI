import { StyleSheet} from 'react-native';
import Constants from 'config/constants'



export const styles = StyleSheet.create({
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  scanAgainButtom: {
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Constants.Colors.yellow,
  },
  scanAgainButtomText: {
    color: Constants.Colors.backgroundColor,
    fontFamily: Constants.fontFamilyXBold,
    fontSize: 17,
  },
});
  