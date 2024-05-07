import { theme } from "@/themes";
import { utils } from "@/utils";
import { StyleSheet } from "react-native";

export const mealsStyle = (categoryColor: string) => {
  return StyleSheet.create({
    mealCardContainer: {
      flexDirection: "column",
      width: utils.screenUtils.screenWidth / 1,
      height: utils.screenUtils.screenHeight / 2.4,
      paddingHorizontal: utils.screenUtils.horizontalSpace,
    },

    mealImage: {
      borderRadius: 10,
      width: "100%",
      height: utils.screenUtils.screenHeight / 3,
    },
    mealText: {
      marginTop: 5,
      fontSize: 15,
      fontFamily: theme.fonts.medium,
      color: "black",
    },

    tagContainer: {
      flexDirection: "row",
    },
    tagText: {
      backgroundColor: categoryColor,
      fontFamily: theme.fonts.regular,
      color: "white",
      marginRight: 5,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 1,
    },
  });
};
