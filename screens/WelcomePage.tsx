import React, { useState } from "react";
import {
  InputAccessoryView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {};

const WelcomePage = (props: Props) => {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome Sky</Text>
      <TextInput value={text} style={styles.input} placeholder="Enter Name" />
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  title: {
    fontSize: 20,
    marginBottom: 13,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    // width: "100%",
    borderColor: "#20232a",
    borderRadius: 6,
  },
});
