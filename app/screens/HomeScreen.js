import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageCrousel from "../components/ImageCrousel";
import Menu from "../components/Menu";
import Screen from "../components/Screen";

const menuItems = [
  {
    id: 1,
    name: "Darshan",
    png: require("../assets/png/darshan.png"),
  },
  {
    id: 2,
    name: "Info",
    png: require("../assets/png/info.png"),
  },
  {
    id: 3,
    name: "InfoScreen",
    png: require("../assets/png/donation.png"),
    alt: "Donation",
  },
  {
    id: 4,
    name: "Seva",
    png: require("../assets/png/seva.png"),
  },
  {
    id: 5,
    name: "News",
    png: require("../assets/png/news_events.png"),
  },
  {
    id: 6,
    name: "InfoScreen2",
    alt: "Shop",
    png: require("../assets/png/shop.png"),
  },
  {
    id: 7,
    name: "InfoScreen3",
    path: "tours",
    png: require("../assets/png/tours.png"),
  },
  {
    id: 8,
    name: "InfoScreen1",
    path: "care",
    png: require("../assets/png/customer_care.png"),
  },
  {
    id: 9,
    name: "InfoScreen4",
    path: "more",
    png: require("../assets/png/more.png"),
  },
];

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <ImageCrousel />
      </View>
      <View style={[styles.container, styles.menuContainer]}>
        <Menu data={menuItems} navigation={navigation} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  menuContainer: {
    marginTop: 40,
  },
});

export default HomeScreen;
