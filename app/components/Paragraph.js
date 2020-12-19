import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function Paragraph({ children, style, numberOfLines }) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.container, style]}
      otherProps
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
  },
});

export default Paragraph;
