import React from "react";
import { StyleSheet, Text, View } from "react-native";

function SimpleList({ time, title }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{time}</Text>
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    paddingHorizontal: 60,
    margin: 3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SimpleList;
