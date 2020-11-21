import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NegativeSide from "./negativeSide/NegativeSide";
import PositiveSide from "./positiveSide/PositiveSide";

interface IProps {
  positiveList: string[];
  negativeList: string[];
}

export default function Main(props: IProps) {
  const { positiveList = [], negativeList = [] } = props;
  return (
    <View style={styles.containerStyle}>
      <PositiveSide data={positiveList} />
      <NegativeSide data={negativeList} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
});
