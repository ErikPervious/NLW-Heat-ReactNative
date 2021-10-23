import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  logoutButton:{
    flexDirection: 'row',
    alignItems: "center"
  },
  logoutText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginRight: 20
  }
})

export default styles;