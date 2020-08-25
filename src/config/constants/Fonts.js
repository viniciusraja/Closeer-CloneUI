import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Layout from './Layout'
export default {
    primaryFontFamily:'Solomon-Sans-SemiBold',
    secondaryFontFamily:'Solomon-Sans-Normal',
    largeFontSize:RFValue(44, Layout.window.height),
    mediumFontSize:RFValue(18, Layout.window.height),
    smallFontSize:RFValue(13, Layout.window.height)
};
