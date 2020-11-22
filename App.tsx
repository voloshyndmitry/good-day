import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IReason } from "./src/common/interface";
import Footer from "./src/components/footer/Footer";
import Header from "./src/components/header/Header";
import Main from "./src/components/main/Main";

export default function App() {
  const [positiveList, setPositive] = useState<IReason[]>([
    { text: "test", id: 12 },
  ]);
  const [negativeList, setNegative] = useState<IReason[]>([]);

  const removeReason = (reason: IReason) => {
    // TODO: refactor it
    setNegative(negativeList.filter(({ id }) => id !== reason.id));
    setPositive(positiveList.filter(({ id }) => id !== reason.id));
  };
  return (
    <View style={styles.containerStyle}>
      <Header
        actions={{
          setPositive: (newValue: IReason) => {
            setPositive([...positiveList, newValue]);
          },
          setNegative: (newValue: IReason) => {
            setNegative([...negativeList, newValue]);
          },
        }}
      />
      <Main
        negativeList={negativeList}
        positiveList={positiveList}
        removeReason={removeReason}
      />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
