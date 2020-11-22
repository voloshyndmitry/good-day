import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.containerStyle}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
