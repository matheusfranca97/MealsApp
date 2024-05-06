import { StyleSheet } from "react-native";
import { theme } from "../../themes";
import { utils } from "@/utils";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    //marginHorizontal: 20,
    //backgroundColor: "blue",
  },
  headerContainer: {
    marginHorizontal: 20,
    width: "100%",
    height: utils.screenDimensions.screenHeight / 9,
    justifyContent: "flex-end",
  },
  headerText: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.black,
    fontSize: 25,
  },
  cardsContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});
