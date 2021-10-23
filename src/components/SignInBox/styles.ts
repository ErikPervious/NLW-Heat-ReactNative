import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() + 32,
  }
});

export default styles;