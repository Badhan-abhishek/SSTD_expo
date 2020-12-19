import React, { useState } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Button,
} from "react-native";
import openMap from "react-native-open-maps";

import Screen from "../components/Screen";
import TextHeading from "../components/TextHeading";
import Paragraph from "../components/Paragraph";
import Separator from "../components/Separator";
import colors from "../config/colors";
import FilterButton from "../components/FilterButton";
import SimpleList from "../components/SimpleList";

const days = [
  {
    id: 1,
    name: "Sun",
  },
  {
    id: 2,
    name: "Mon",
  },
  {
    id: 3,
    name: "Tue",
  },
  {
    id: 4,
    name: "Wed",
  },
  {
    id: 5,
    name: "Thu",
  },
  {
    id: 6,
    name: "Fri",
  },
  {
    id: 7,
    name: "Sat",
  },
];

const darshanEvents = [
  {
    id: 1,
    time: "6:00AM",
    title: "Darshan Timing",
  },
  {
    id: 2,
    time: "6:00AM",
    title: "Darshan Timing",
  },
  {
    id: 3,
    time: "6:00AM",
    title: "Darshan Timing",
  },
  {
    id: 4,
    time: "6:00AM",
    title: "Darshan Timing",
  },
  {
    id: 5,
    time: "6:00AM",
    title: "Darshan Timing",
  },
];
const monDarshan = [
  {
    id: 1,
    time: "6:00AM",
    title: "Darshan new Timing",
  },
  {
    id: 2,
    time: "6:00AM",
    title: "Darshan new Timing",
  },
  {
    id: 3,
    time: "6:00AM",
    title: "Darshan new Timing",
  },
  {
    id: 4,
    time: "6:00AM",
    title: "Darshan new Timing",
  },
  {
    id: 5,
    time: "6:00AM",
    title: "Darshan new Timing",
  },
];

function InfoScreen(props) {
  const [activeDay, setActiveDay] = useState();
  const [currentData, setCurrentData] = useState(monDarshan);

  const listHandler = (index) => {
    setActiveDay(index);
  };

  const mapHandler = () => {
    openMap({ latitude: 37.865101, longitude: -119.53833 });
  };

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../assets/images/img3.jpeg")}
            />
          </View>
          <View style={styles.textContainer}>
            <TextHeading>Sri Suttamma Talli Devasthanam</TextHeading>
            <Paragraph>Vijaywada, Andhra Pradesh IN</Paragraph>
          </View>
          <Separator />
          <View style={styles.aboutContainer}>
            <TextHeading>About</TextHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </View>
          <Separator />
          <View style={styles.darshanContainer}>
            <TextHeading>Darshan</TextHeading>
            {/* Causing error for virtualized list */}
            {/* <FlatList
              horizontal
              data={days}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <FilterButton
                  onPress={() => listHandler(item.id)}
                  title={item.name}
                />
              )}
            /> */}
            {/* Map function because it is not scrollable */}
            <View style={styles.filterContainer}>
              {days.map((item, key) => {
                return (
                  <FilterButton
                    key={key}
                    onPress={() => listHandler(item.id)}
                    title={item.name}
                  />
                );
              })}
            </View>
            {/* Old code  */}
            {/* <FlatList
                data={monDarshan}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <SimpleList time={item.time} title={item.title} />
                )}
              /> */}

            {/* <FlatList
                data={darshanEvents}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <SimpleList time={item.time} title={item.title} />
                )}
              /> */}
            {/* Old code end  */}
            {activeDay !== 4
              ? monDarshan.map((item, key) => {
                  return (
                    <SimpleList time={item.time} key={key} title={item.title} />
                  );
                })
              : darshanEvents.map((item, key) => {
                  return (
                    <SimpleList time={item.time} key={key} title={item.title} />
                  );
                })}
          </View>
          <Separator />
          <View style={styles.mapContainer}>
            <TextHeading>Map</TextHeading>
            <View style={styles.map}>
              <Button title="Go to location...🗺" onPress={() => mapHandler()} />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    height: 300,
    overflow: "hidden",
    backgroundColor: colors.background,
  },
  textContainer: {
    height: 90,
    padding: 10,
    justifyContent: "space-between",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  aboutContainer: {
    padding: 10,
  },
  darshanContainer: {
    padding: 10,
    width: "100%",
  },
  mapContainer: {
    padding: 10,
  },
  map: {
    height: 400,
    width: "100%",
  },
  filterContainer: {
    flexDirection: "row",
  },
});

export default InfoScreen;
