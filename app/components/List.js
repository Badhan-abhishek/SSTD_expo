import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function List({ icon, name, size, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Feather color={colors.medium} name={icon} size={size} />
        <AppText style={styles.text}>{name}</AppText>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    backgroundColor: colors.background,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    color: colors.medium,
    fontSize: 30,
  },
});

export default List;
