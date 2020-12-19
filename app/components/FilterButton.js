import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function FilterButton({ onPress, title, style }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    padding: 2,
    borderRadius: 1,
    width: 50,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginHorizontal: 2,
  },
  text: {
    textAlign: "center",
    color: colors.secondary,
  },
});

export default FilterButton;
