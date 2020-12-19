import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";
import List from "./List";
import MenuButton from "./MenuButton";

const options = [
  {
    id: 1,
    name: "6:00-8:00AM",
    icon: "sunrise",
  },
  {
    id: 2,
    name: "8:00-10:00AM",
    icon: "sun",
  },
  {
    id: 3,
    name: "10:00-12:00AM",
    icon: "sun",
  },
  {
    id: 4,
    name: "12:00-2:00PM",
    icon: "sun",
  },
  {
    id: 5,
    name: "2:00-4:00PM",
    icon: "sun",
  },
  {
    id: 6,
    name: "4:00-6:00PM",
    icon: "sunset",
  },
  {
    id: 7,
    name: "6:00-8:00PM",
    icon: "moon",
  },
];

const optionsWed = [
  {
    id: 1,
    name: "4:00-6:00AM",
    icon: "sunrise",
  },
  {
    id: 2,
    name: "6:00-8:00AM",
    icon: "sunrise",
  },
  {
    id: 3,
    name: "8:00-10:00AM",
    icon: "sun",
  },
  {
    id: 4,
    name: "10:00-12:00AM",
    icon: "sun",
  },
  {
    id: 5,
    name: "12:00-2:00PM",
    icon: "sun",
  },
  {
    id: 6,
    name: "2:00-4:00PM",
    icon: "sun",
  },
  {
    id: 7,
    name: "4:00-6:00PM",
    icon: "sunset",
  },
  {
    id: 8,
    name: "6:00-8:00PM",
    icon: "moon",
  },
];
// Options for days with wednesday

function Selector({ selectedDay }) {
  const [viewModal, setViewModal] = useState(false);
  const [visitTime, setVisitTime] = useState("");

  const timeHandler = (item) => {
    setVisitTime(item.name);
    setViewModal(!viewModal);
  };

  return (
    <>
      <MenuButton
        title={visitTime ? visitTime : "SELECT TIME"}
        name="access-time"
        size={30}
        onPress={() => {
          setViewModal(true);
        }}
        color={colors.medium}
        textColor={{ color: colors.medium }}
        style={{ backgroundColor: colors.background }}
      />
      <Modal
        visible={viewModal}
        transparent={true}
        statusBarTranslucent={false}
        animationType="slide"
      >
        <View style={styles.listContainer}>
          <FlatList
            data={selectedDay == 3 ? optionsWed : options}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <List
                icon={item.icon}
                name={item.name}
                size={30}
                onPress={() => timeHandler(item)}
              />
            )}
          />
          <TouchableOpacity
            onPress={() => setViewModal(!viewModal)}
            style={styles.cancelButton}
          >
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    height: 480,
    width: 300,
    backgroundColor: colors.background,
    elevation: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  timeContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cancelButton: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    color: colors.white,
    fontSize: 30,
  },
});

export default Selector;
