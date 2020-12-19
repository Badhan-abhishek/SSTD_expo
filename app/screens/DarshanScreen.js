import React, { useState } from "react";
import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import Card from "../components/Card";
import DatePicker from "../components/DatePicker";
import Screen from "../components/Screen";
import Selector from "../components/Selector";
import Separator from "../components/Separator";
import colors from "../config/colors";

const darshanVary = [
  {
    id: 1,
    title: "Dharshan One",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse laoreet fermentum ligula vel elementum",
    price: 100,
    image: require("../assets/images/img1.jpeg"),
  },
  {
    id: 2,
    title: "Dharshan Two",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse laoreet fermentum ligula vel elementum",
    price: 100,
    image: require("../assets/images/img1.jpeg"),
  },
  {
    id: 3,
    title: "Dharshan Three",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse laoreet fermentum ligula vel elementum",
    price: 100,
    image: require("../assets/images/img1.jpeg"),
  },
  {
    id: 4,
    title: "Dharshan Four",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse laoreet fermentum ligula vel elementum",
    price: 100,
    image: require("../assets/images/img1.jpeg"),
  },
];

function DarshanScreen(props) {
  const isCarousel = React.useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedDay, setSelectedDay] = useState("");

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

  const snapHandler = (index) => {
    setActiveSlide(index);
  };

  const dateHandler = (currentDate) => {
    setSelectedDay(currentDate.getDay());
  };

  const dataLength = darshanVary.length;

  return (
    <>
      <View style={styles.container}>
        <DatePicker callBackToParent={dateHandler} />
        <Selector selectedDay={selectedDay} />
      </View>
      <Separator />
      <View style={styles.cardContainer}>
        <Carousel
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
          layout="default"
          ref={isCarousel}
          data={darshanVary}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              para={item.para}
              price={item.price}
              image={item.image}
            />
          )}
          onSnapToItem={(index) => {
            snapHandler(index);
          }}
        />
      </View>
      <Pagination
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 6,
          backgroundColor: colors.darkBlue,
        }}
        dotsLength={dataLength}
        activeDotIndex={activeSlide}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 90,
  },
  cardContainer: {
    paddingVertical: 20,
    height: 580,
    width: "100%",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    padding: 0,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default DarshanScreen;
