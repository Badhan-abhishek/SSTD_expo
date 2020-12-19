import React from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";
import Paragraph from "./Paragraph";
import TextHeading from "./TextHeading";

function CustomModal({
  title,
  subtitle,
  para,
  modalState,
  containerStyle,
  modalStyle,
  setViewModal,
}) {
  const cancelHandler = () => {
    setViewModal(false);
  };

  return (
    <Modal
      visible={modalState}
      transparent={true}
      statusBarTranslucent={false}
      animationType="slide"
    >
      <View style={[styles.container, containerStyle]}>
        <View style={modalStyle}>
          <TextHeading>{title}</TextHeading>
          <AppText style={styles.date}>{subtitle}</AppText>
          <Paragraph>{para}</Paragraph>
        </View>
        <Button title="Cancel" onPress={() => cancelHandler()} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.white,
  },
});

export default CustomModal;
