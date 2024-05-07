import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const horizontalSpace = 30;

export const screenUtils = {
  screenHeight,
  screenWidth,
  horizontalSpace,
};
