import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DarshanScreen from "./screens/DarshanScreen";
import HomeScreen from "./screens/HomeScreen";
import InfoScreen from "./screens/InfoScreen";
import NewsScreen from "./screens/NewsScreen";
import SevaScreen from "./screens/SevaScreen";
import colors from "./config/colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Stack.Screen
          style={styles.container}
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          style={styles.container}
          name="Darshan"
          component={DarshanScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="Info"
          component={InfoScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="Seva"
          component={SevaScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="InfoScreen"
          component={InfoScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="InfoScreen1"
          component={InfoScreen}
        />

        <Stack.Screen
          style={styles.container}
          name="News"
          component={NewsScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="InfoScreen2"
          component={InfoScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="InfoScreen3"
          component={InfoScreen}
        />
        <Stack.Screen
          style={styles.container}
          name="InfoScreen4"
          component={InfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
