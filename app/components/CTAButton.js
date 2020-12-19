import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";
import colors from "../config/colors";

function CTAButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.text}>Add to cart</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    paddingVertical: 10,
    backgroundColor: colors.background,
    width: "100%",
    borderRadius: 5,
    elevation: 1,
  },
  text: {
    textAlign: "center",
    color: colors.textColor,
    fontSize: 20,
  },
});

export default CTAButton;
