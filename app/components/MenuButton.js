import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import MainText from "./MainText";
import colors from "../config/colors";

function MenuButton({
  title,
  name,
  size,
  onPress,
  style,
  color = colors.black,
  textColor = colors.black,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, style]}>
          <MaterialIcons name={name} size={size} color={color} />
          <MainText style={[styles.text, textColor]}>{title}</MainText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignSelf: "center",
  },
  buttonContainer: {
    backgroundColor: colors.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    textAlign: "center",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    textAlignVertical: "center",
  },
});

export default MenuButton;
