import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "./Screen";
import TextHeading from "./TextHeading";
import Paragraph from "./Paragraph";
import Separator from "./Separator";
import QuantityButton from "./QuantityButton";
import CTAButton from "./CTAButton";

function Card({ title, image, price, para }) {
  const [itemAdded, setItemAdded] = useState(false);
  const [count, setCount] = useState(1);

  var temp = 1;
  var buttonState = true;
  const increaseCount = () => {
    temp = count + 1;
    setCount(temp);
  };

  const decreaseCount = () => {
    temp = count - 1;
    setCount(temp);
  };

  const doNothing = () => {};

  if (count) {
    buttonState = false;
  } else {
    buttonState = true;
  }

  const ctaHandler = () => {
    setItemAdded(true);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.headingSection}>
            <TextHeading>{title}</TextHeading>
            <Paragraph style={styles.para}>{para}</Paragraph>
            <Paragraph style={styles.price}>
              <FontAwesome color={colors.textColor} name="rupee" size={18} />
              {price}
            </Paragraph>
          </View>
          <View style={styles.cartContainer}>
            {itemAdded ? (
              <QuantityButton
                onPressInc={increaseCount}
                onPressDec={!buttonState ? decreaseCount : doNothing}
                count={count}
              />
            ) : (
              <CTAButton onPress={ctaHandler} />
            )}
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: colors.lightBackground,
    marginHorizontal: "10%",
    elevation: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  headingSection: {
    justifyContent: "space-between",
    padding: 15,
  },
  imageContainer: {
    overflow: "hidden",
    height: "50%",
  },
  actionContainer: {
    overflow: "hidden",
    padding: 5,
    flex: 1,
    justifyContent: "space-around",
  },

  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    color: colors.textColor,
  },
  para: {
    marginTop: 10,
    color: colors.textColor,
  },
});

export default Card;
