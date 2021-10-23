import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17
  }
});

export default styles;