import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableHighlightComponent,
  TouchableNativeFeedbackBase,
} from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function MenuItems({ path, onPress, name }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={path} />
          </View>
          <View style={styles.subtitleContainer}>
            <AppText style={styles.subtitle} numberOfLines={1}>
              {name}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    // marginVertical: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "33.3%",
  },
  contentContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  imageContainer: {
    alignItems: "center",
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  subtitleContainer: {
    width: 60,
  },
  subtitle: {
    width: "100%",
  },
});

export default MenuItems;
