import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function TextHeading({ children, style }) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default TextHeading;
