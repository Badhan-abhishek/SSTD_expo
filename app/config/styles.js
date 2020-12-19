import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 10,
    marginTop: 5,
    textTransform: "uppercase",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
