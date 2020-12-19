import React from "react";
import { StyleSheet, TouchableNativeFeedback, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function QuantityButton({ onPressInc, onPressDec, count }) {
  return (
    <>
      <TouchableNativeFeedback onPress={onPressDec}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="minus" size={20} />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.text}>{count}</Text>
      <TouchableNativeFeedback onPress={onPressInc}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="plus" size={20} />
        </View>
      </TouchableNativeFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  icon: {
    borderWidth: 2,
    borderRadius: 2,
    width: 45,
    alignContent: "center",
    padding: 10,
  },
});

export default QuantityButton;
