import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import MenuButton from "./MenuButton";
import colors from "../config/colors";

function DatePicker({ callBackToParent }) {
  const todayDate = new Date();
  const tomorrowDate = todayDate.setDate(todayDate.getDate() + 1);

  const [date, setDate] = useState(new Date(tomorrowDate));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === "ios");
    setDate(currentDate);
    callBackToParent(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <>
      <MenuButton
        title={date ? date.toDateString() : "SELECT DATE"}
        name="date-range"
        size={30}
        onPress={showDatepicker}
        color={colors.textColor}
        textColor={{ color: colors.textColor }}
        style={{ backgroundColor: colors.background }}
      />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
          minimumDate={new Date(tomorrowDate)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DatePicker;
