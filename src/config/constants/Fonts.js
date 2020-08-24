import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Layout from './Layout'
export default {
    primaryFontFamily:'Solomon-Sans-SemiBold',
    secondaryFontFamily:'Solomon-Sans-Normal',
    bigFontSize:RFValue(24, Layout.window.height),
    mediumFontSize:RFValue(18, Layout.window.height),
    smallFontSize:RFValue(11, Layout.window.height)
};
