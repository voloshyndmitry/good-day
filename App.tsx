import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Main from "./src/components/main/Main";

export default function App() {
  const [positiveList, setPositive] = useState(["test1", "test2", "test3"]);
  const [negativeList, setNegative] = useState(["test1", "test2", "test3"]);
  return (
    <View style={styles.containerStyle}>
      <Header
        actions={{
          setPositive: (newValue: string) => {
            setPositive([...positiveList, newValue]);
          },
          setNegative: (newValue: string) => {
            setNegative([...negativeList, newValue]);
          },
        }}
      />
      <Main negativeList={negativeList} positiveList={positiveList} />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
