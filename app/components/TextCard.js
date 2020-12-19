import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

import TextHeading from "./TextHeading";
import AppText from "./AppText";
import Paragraph from "./Paragraph";
import Screen from "./Screen";
import colors from "../config/colors";
import CustomModal from "./CustomModal";

function SmallButton({ buttonName, onPress }) {
  return (
    <View style={styles.smallButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
}

function TextCard({
  title,
  subtitle,
  para,
  onPress,
  modalState,
  setModalState,
}) {
  const [textShown, setTextShown] = useState(true);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextHeading style={styles.headingText}>{title}</TextHeading>
          <AppText style={styles.date}>{subtitle}</AppText>
          <Paragraph
            style={styles.paraText}
            numberOfLines={textShown ? 4 : undefined}
          >
            {para}
          </Paragraph>
          {/* <Text style={styles.text}>
              
            </Text> */}
          <View style={styles.smallButtonContainer}>
            <SmallButton
              onPress={() => setTextShown(!textShown)}
              buttonName={textShown ? "Show more..." : "Show less..."}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.light,
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
  },
  headingText: {
    color: colors.light,
  },
  date: {
    color: colors.primary,
    padding: 0,
    textAlign: "left",
    textDecorationLine: "underline",
    fontSize: 12,
  },
  textContainer: {
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: colors.secondary,
  },
  paraText: {
    color: colors.light,
  },
  smallButton: {
    borderWidth: 1,
    borderColor: colors.medium,
    padding: 2,
    borderRadius: 3,
  },
  smallButtonContainer: {
    paddingVertical: 20,
  },
  buttonText: { textAlign: "center", color: colors.medium },
});

export default TextCard;
