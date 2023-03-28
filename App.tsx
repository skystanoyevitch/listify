import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomePage from "./screens/WelcomePage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "blue",
  },
});
