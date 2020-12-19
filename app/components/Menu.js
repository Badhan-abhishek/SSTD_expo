import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MenuItems from "./MenuItems";

function Menu({ data, navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuItems
            path={item.png}
            name={item.name}
            onPress={() => navigation.navigate(item.name)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignContent: "center",
  },
});

export default Menu;
