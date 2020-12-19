import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function Heading({ children }) {
  return <Text style={styles.container}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    elevation: 10,
    backgroundColor: colors.primary,
  },
});

export default Heading;
