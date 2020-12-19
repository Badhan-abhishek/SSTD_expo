import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import TextCard from "../components/TextCard";
import colors from "../config/colors";

const news = [
  {
    id: 1,
    title: "Heading for the news",
    subtitle: "12 Dec 2020",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Pellentesque habitant morbi tristique senectus et netus et. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Tincidunt id aliquet risus feugiat in. Ac tortor dignissim convallis aenean et tortor at. Viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac. Habitant morbi tristique senectus et netus et malesuada fames ac. Pulvinar neque laoreet suspendisse interdum consectetur. Molestie nunc non blandit massa enim. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. In mollis nunc sed id semper risus. Dui vivamus arcu felis bibendum.",
  },
  {
    id: 2,
    title: "Heading for the news",
    subtitle: "12 Dec 2020",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Pellentesque habitant morbi tristique senectus et netus et. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Tincidunt id aliquet risus feugiat in. Ac tortor dignissim convallis aenean et tortor at. Viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac. Habitant morbi tristique senectus et netus et malesuada fames ac. Pulvinar neque laoreet suspendisse interdum consectetur. Molestie nunc non blandit massa enim. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. In mollis nunc sed id semper risus. Dui vivamus arcu felis bibendum.",
  },
  {
    id: 3,
    title: "Heading for the news",
    subtitle: "12 Dec 2020",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Pellentesque habitant morbi tristique senectus et netus et. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Tincidunt id aliquet risus feugiat in. Ac tortor dignissim convallis aenean et tortor at. Viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac. Habitant morbi tristique senectus et netus et malesuada fames ac. Pulvinar neque laoreet suspendisse interdum consectetur. Molestie nunc non blandit massa enim. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. In mollis nunc sed id semper risus. Dui vivamus arcu felis bibendum.",
  },
  {
    id: 4,
    title: "Heading for the news",
    subtitle: "12 Dec 2020",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Pellentesque habitant morbi tristique senectus et netus et. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Tincidunt id aliquet risus feugiat in. Ac tortor dignissim convallis aenean et tortor at. Viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac. Habitant morbi tristique senectus et netus et malesuada fames ac. Pulvinar neque laoreet suspendisse interdum consectetur. Molestie nunc non blandit massa enim. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. In mollis nunc sed id semper risus. Dui vivamus arcu felis bibendum.",
  },
  {
    id: 5,
    title: "Heading for the news",
    subtitle: "12 Dec 2020",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Pellentesque habitant morbi tristique senectus et netus et. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Tincidunt id aliquet risus feugiat in. Ac tortor dignissim convallis aenean et tortor at. Viverra suspendisse potenti nullam ac tortor vitae. Netus et malesuada fames ac. Habitant morbi tristique senectus et netus et malesuada fames ac. Pulvinar neque laoreet suspendisse interdum consectetur. Molestie nunc non blandit massa enim. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. In mollis nunc sed id semper risus. Dui vivamus arcu felis bibendum.",
  },
];

function NewsScreen(props) {
  const [modalState, setModalState] = useState(false);

  const modalHandler = () => {
    setModalState(true);
  };

  return (
    <Screen style={{ backgroundColor: colors.matteBlack }}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TextCard
            title={item.title}
            subtitle={item.subtitle}
            para={item.para}
            onPress={() => setModalState(true)}
            modalState={modalState}
            setModalState={setModalState}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NewsScreen;
