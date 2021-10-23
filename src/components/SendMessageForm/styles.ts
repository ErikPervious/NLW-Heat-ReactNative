import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { COLORS } from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.BLACK_TERTIARY,
    paddingBottom: getBottomSpace() + 16,
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  characterCount: {
    color: COLORS.GRAY_PRIMARY,
    textAlign: 'right',
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 88,
    textAlignVertical: 'top',
    color: COLORS.WHITE,
  }
});

export default styles;