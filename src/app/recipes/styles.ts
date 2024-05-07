import { StyleSheet } from "react-native";
import { theme } from "../../themes";
import { utils } from "@/utils";

export const recipesStyles = (lightColor: string, hardColor: string) => {
  return StyleSheet.create({
    recipesContainer: {
      flex: 1,
      flexDirection: "column",
    },
    headerContainer: {
      borderRadius: 10,
      backgroundColor: lightColor,
      padding: utils.screenUtils.horizontalSpace,
      height: utils.screenUtils.screenHeight / 4,
      flexDirection: "column-reverse",
    },
    ammountOfContainer: {
      width: 110,
      backgroundColor: hardColor,
      borderRadius: 10,
    },
    ammountOfRecipesText: {
      textAlign: "center",
      paddingVertical: 2,
      fontFamily: theme.fonts.regular,
      color: "white",
      fontSize: 15,
    },

    titleEmojiRow: {
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "space-between",
    },
    titleText: {
      maxWidth: "70%",
      fontFamily: theme.fonts.medium,
      fontSize: 50,
      color: hardColor,
    },

    emojiText: {
      fontSize: 80,
    },

    recipesText: {
      marginTop: 10,
      marginHorizontal: utils.screenUtils.horizontalSpace,
      fontFamily: theme.fonts.medium,
      fontSize: 20,
    },

    recipesList: {
      flex: 1,
    },
  });
};
