import React from "react";
import { Image, StyleSheet, View } from "react-native";

import ScreenCommon from "./ScreenCommon";

function ImageCrousel(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageCrousel;
