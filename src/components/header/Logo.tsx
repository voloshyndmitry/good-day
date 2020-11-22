import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { COLORS } from "../../common/constants";

export default function Logo() {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Good Day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 30,
  },

  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.red,
  },
});
