import { StyleSheet } from "react-native";
import { utils } from "@/utils";
import { theme } from "@/themes";

const boxHeight = utils.screenDimensions.screenHeight / 5;
const boxWidth = boxHeight;

export const categoryCardStyles = (backgroundCardColor: string, textColor: string) => {
  return StyleSheet.create({
    categoryCardContainer: {
      height: boxHeight,
      width: boxWidth,
      backgroundColor: backgroundCardColor,
      borderRadius: 30,
    },

    titleTextContainer: {
      flex: 1,
      justifyContent: "flex-end",
      marginHorizontal: 15,
      marginVertical: 15,
    },

    titleText: {
      textAlign: "left",
      color: textColor,
      fontFamily: theme.fonts.regular,
      fontSize: 15,
    },
    emojiTextContainer: {
      flex: 1,
      justifyContent: "flex-end",
      marginHorizontal: 15,
      marginVertical: 15,
    },

    emojiText: {
      textAlign: "right",
      fontSize: 35,
    },
  });
};
