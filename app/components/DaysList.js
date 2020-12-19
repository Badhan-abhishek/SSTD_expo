import React from "react";
import { FlatList, StyleSheet } from "react-native";

import FilterButton from "./FilterButton";

function DaysList({ data, onPress }) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <FilterButton onPress={onPress} title={item.name} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DaysList;
